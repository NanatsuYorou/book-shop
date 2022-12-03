import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeBook} from '../store/slice'


export default function ShoppingCart() {
    
    const cart = useSelector(state => state.app.shoppingCart)
    const totalPrice = useSelector(state => state.app.totalPrice)
    const dispatch = useDispatch()

  return (
    <>
        <ul>
            {cart.map(book => (
                <li>
                    <p>{book.name}</p>
                    <p>{book.author}</p>
                    <p>{book.price}</p>
                    <span onClick={() => dispatch(removeBook({...book}))} style={{color: 'red', padding: '5px'}} >&times;</span>
                </li>)
            )}
        </ul>
        <hr />
        {totalPrice}
    </>

  )
}
