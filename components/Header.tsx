import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsSearch, } from 'react-icons/bs'
import { AiOutlineShopping } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../redux/basketSlice'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {

    const session = useSession()

    const items = useSelector(selectBasketItems)

    return (
        <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4'>
            <div className='flex items-center justify-center md:w-1/5'>
                <Link href="/">
                    <div className='flex items-center justify-center relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'> 
                        <Image 
                            src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png"} 
                            alt="/" 
                            style={{objectFit: "contain"}}
                            width={60} 
                            height={60}
                            />
                    </div>
                </Link>
            </div>
            <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
                <a className='headerLink'>Product</a>
                <a className='headerLink'>Explore</a>
                <a className='headerLink'>Support</a>
                <a className='headerLink'>Business</a>
            </div>
            <div className='flex items-center justifc gap-x-4 md:w-1/5'>
                <BsSearch className='headerIcon'/>
                <Link href="/checkout">
                    <div className='relative cursor-pointer'>
                        <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
                            {items.length}
                        </span>
                        <AiOutlineShopping className='headerIcon'/>
                    </div>
                </Link>

                {session?.data ? (
                    <Image onClick={() => signOut()} src={session?.data?.user?.image  || 'https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png'} className='cursor-pointer rounded-full' width={25} height={25} alt="83" />
                ) : ( <FiUser className='headerIcon' onClick={() => signIn()} />)}

            </div>
        </header>
    )
}

export default Header