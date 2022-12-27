import { FiShoppingBag } from 'react-icons/fi'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice'

function Basket() {

  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)

  if(!items.length) return null

  return (
    <Link href="/checkout">
        <div className='fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300' >
          {items.length > 0 && (
            <span className='absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white'>{items.length}</span>
          )}
        </div>
    </Link>
  )
}

export default Basket