import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartIsOpen: false
    },
    reducers: {
        openCart(state, action){
            state.cartIsOpen = true
        },
        closeCart(state, action){
            state.cartIsOpen = false
        }
    }
})

export const {openCart, closeCart} = cartSlice.actions 

export default cartSlice.reducer