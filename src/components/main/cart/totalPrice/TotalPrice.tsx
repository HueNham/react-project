import React, { useRef } from 'react'
import { useAppSelector } from '../../../../hooks/reduxHooks'
import { calculatePrice, calculateTotal } from '../../../../features/cart/cartHelpers'
import { shipping } from '../../../../constants/constants'

import s from './TotalPrice.module.scss'

export interface IPriceRef {
    sum: number,
    shipping: number,
    total: number
}

const TotalPrice: React.FC = () => {
    const userPriceBasket = useAppSelector(state => state.cart.userPriceBasket)

    const priceRef = useRef<IPriceRef>({
        sum: 0, 
        shipping: 0, 
        total: 0
    })

    priceRef.current.sum = calculatePrice(userPriceBasket)
    priceRef.current.total = calculateTotal(priceRef.current)

    return (
        <div className={s.price_container}>
            <div className={s.sum_container}>
                <span>Sum total</span>
                <span>{`$ ${priceRef.current.sum}`}</span>
            </div>
            <div className={s.shipping_container}>
                <span>Shipping</span>
                <span>{`$ ${shipping}`}</span>
            </div>
            <div className={s.total_container}>
                <span>TOTAL:</span>
                <span>{`$ ${priceRef.current.total}`}</span>
            </div>
        </div>
    )
}

export default TotalPrice