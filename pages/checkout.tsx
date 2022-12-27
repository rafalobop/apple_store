import Head from 'next/head'
import Header from '../components/Header'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice'
import { useSelector } from 'react-redux'
import { FiChevronDown } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import CheckoutProduct from '../components/CheckoutProduct'

function Checkout() {
  
    const items = useSelector(selectBasketItems)
    const router = useRouter()
    const [ groupedItemsInBasket, setGroupedItemsInBasket ] = useState({} as {[key: string]: Product[]})
  
    useEffect(() => {
        const groupedItems = items.reduce((result, item) => {
            (result[item._id] = result[item._id] || []).push(item);
            return result;
        }, {} as {[key: string]: Product[]})

        setGroupedItemsInBasket(groupedItems)
    }, [items])

    return (
    <div>
        <Head>
            <title>Finish your buy ! | Apple Store</title>
            <link rel="icon" href="/applelogo.ico" />
        </Head>
        <Header />
        <main>
            <div>
                <h1 className='my-4 text-3xl font-semibold lg:text-4xl'>{items.length > 0 ? "Review your Bag." : "Your bag is empty"}</h1>
                <p className='my4'>Free delivery and free returns.</p>
                {items.length === 0 && (
                    <Button 
                        title="Continue Shopping"
                        onClick={() => router.push('/')}
                    />
                )}
            </div>

            {items.length > 0 && (
               /*  <div>
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => {
                        <CheckoutProduct />
                    })}
                </div> */
            )}
        </main>
    </div>
  )
}

export default Checkout