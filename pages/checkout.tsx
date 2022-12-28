import Head from 'next/head'
import Header from '../components/Header'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice'
import { useSelector } from 'react-redux'
import { FiChevronDown } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import CheckoutProduct from '../components/CheckoutProduct'
import { BsChevronCompactDown } from 'react-icons/bs'

function Checkout() {

    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
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
    <div className='min-h-screen overflow-hidden bg-[#e7ecee]'>
        <Head>
            <title>Finish your buy | Apple Store</title>
            <link rel="icon" href="/applelogo.ico" />
        </Head>
        <Header />
        <main className='mx-auto max-w-5xl pb-24 mt-16'>
            <div className='px-5'>
                <h1 className='my-4 text-3xl font-semibold lg:text-4xl'>{items.length > 0 ? "Review your Bag." : "Your bag is empty"}</h1>
                <p className='my-4 font-semibold'>Free delivery and free returns.</p>
                {items.length === 0 && (
                    <Button 
                        title="Continue Shopping"
                        onClick={() => router.push('/')}
                    />
                )}
            </div>

            {items.length > 0 && (
                <div className='mx-5 md:mx-8'>
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <CheckoutProduct key={key} items={items} id={key} />
                    ))}
                    <div className='my-12 mt-6 ml-auto max-w-3xl'>
                        <div className='divide-y divide-gray-300'>
                            <div className='pb-4'>
                                <div className='flex justify-between'>
                                    <p>Subtotal </p>
                                    <p>USD ${basketTotal},00</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Shipping </p>
                                    <p>FREE</p>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-x-1 lg:flex-row'>
                                        Estimated tax for:{" "}
                                        <p className='flex cursor-pointer items-end text-blue-500 hover:underline'>Enter zip code
                                            <BsChevronCompactDown className='h-6 w-6'/>
                                        </p>
                                    </div>
                                    <p>$ -</p>
                                </div>
                            </div>
                            <div className='flex justify-between pt-4 text-xl font-semibold'>
                                <h4 className='mb-4 flex flex-col text-xl font-semibold'>Total</h4>
                                <h4 className='mb-4 flex flex-col text-xl font-semibold'>USD ${basketTotal},00</h4>
                            </div>
                        </div>
                        <div className='my-14 space-y-4'>
                            <h4 className='text-xl font-semibold'>How would you like to check out?</h4>
                            <div className='flex flex-col gap-4 md:flex-row'>
                                <div className='order-2 flex flex-1 flex-col items-center rounded-xl bg-gray-200 p-8 py-12 text-center'> 
                                    <h4 className='mb-4 flex flex-col text-xl font-semibold'>
                                        <span>Pay Monthly</span>
                                        <span>with Apple Card</span>
                                        <span>$283.16/Mo. at 0% APR<sup className='-top-1'></sup></span>
                                    </h4>
                                    <Button title="Checkout with Apple card Monthly installments" />
                                    <p className='mt-2 max-w-[240px] text-[13px]'>$0.00 due today, which includes applicable full-price
                                        items, down payments, shipping, and taxes.
                                    </p>
                                </div>
                                <div className='flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2'>
                                    <h4 className='mb-4 flex flex-col text-xl font-semibold'>
                                        Pay in full
                                        <span>
                                            USD ${basketTotal}
                                        </span>
                                    </h4>
                                    <Button noIcon title="Checkout" width='w-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    </div>
  )
}

export default Checkout