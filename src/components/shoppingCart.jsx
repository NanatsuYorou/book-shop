import { ShoppingBasket } from '@mui/icons-material'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {closeCart} from '../store/cartSlice'
import CartItem from './shoppingCartItem'
import CloseIcon from '@mui/icons-material/Close';

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
        sx={{width: '40%'}}
        >
            <List >
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Корзина"/>
                    <ListItemIcon>
                        <CloseIcon onClick={() => (dispatch(closeCart()))}/>
                    </ListItemIcon>
                </ListItem>
                <Divider sx={{mb: '10px'}} />
                {cart.length !== 0 ? (cart.map(book => (
                    <CartItem key={book.id} book={book}/>
                ))) : <ListItem>Корзина пуста!</ListItem>}
            {
            cart.length !== 0 &&
            <>
                <Divider />
                <ListItem sx={{fontWeight: 700}} item>
                   Итого: {totalPrice}
                </ListItem>
            </> 
            }
            </List>
        </Drawer>
    </>

  )
}
