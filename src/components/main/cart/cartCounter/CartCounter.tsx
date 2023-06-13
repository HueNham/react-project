import React, { useState,useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { decreaseProductQty, increaseProductQty } from '../../../../features/cart/cartSlice'
import cn from 'classnames'

import s from './CartCounter.module.scss'

interface ICartCounterProps {
    cName: string,
    isbn13: string,
}

const CartCounter: React.FC<ICartCounterProps> = ({ cName, isbn13 }) => {
    const product = useAppSelector(state => state.cart.userPriceBasket)
    // const [count, setCount] = useState(product[isbn13].count) //lấy giá trị từ Redux Store
    // const dispatch = useAppDispatch()

    const [count, setCount] = useState(0); // Giá trị ban đầu là 0
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      // Đặt giá trị ban đầu cho count khi product thay đổi
      if (product[isbn13]) {
        setCount(product[isbn13].count);
      }
    }, [product, isbn13]);

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count => count - 1)
            dispatch(decreaseProductQty(isbn13))
        } 
    }

    const increaseCount = () => {
        setCount(count => count + 1)
        dispatch(increaseProductQty(isbn13))
    }
    
    return (
      <div className={cn(s.counter_container, s[cName])}>
          <button className={s.counter_decrement} onClick={decreaseCount}>-</button>
          <span className={s.count}>{ count }</span>
          <button className={s.counter_increment} onClick={increaseCount}>+</button>
      </div>
    )
}   

export default CartCounter