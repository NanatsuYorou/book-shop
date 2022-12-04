import { ShoppingBasket } from '@mui/icons-material'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {closeCart} from '../store/cartSlice'
import CartItem from './shoppingCartItem'

export default function ShoppingCart() {
    
    const cart = useSelector(state => state.app.shoppingCart)
    const totalPrice = useSelector(state => state.app.totalPrice)
    const cartIsOpen = useSelector(state => state.cart.cartIsOpen)
    const dispatch = useDispatch()


  return (
    <>
        <Drawer
        anchor='right'
        open={cartIsOpen}
        onClose={() => dispatch(closeCart())}
        >
            <List sx={{width: '300px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Корзина"/>
                </ListItem>
                <Divider />
                {cart.length !== 0 ? (cart.map(book => (
                    <CartItem book={book}/>
                ))) : <ListItem>Корзина пуста!</ListItem>}
            </List>
            {
            cart.length !== 0 &&
            <>
                <Divider />
                {totalPrice}
            </> 
            }
        </Drawer>
    </>

  )
}
