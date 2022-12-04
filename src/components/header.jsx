import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import {openCart} from '../store/cartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Header() {

  const dispatch = useDispatch()

  return (
    <AppBar position="static">
        <Toolbar>
            <Typography
              variant='body1'
              component='span'
              sx={{flexGrow: 1, textAlign: 'left'}}
            >
                Books Shop
            </Typography>
            <IconButton
            color='inherit'
            onClick={() => dispatch(openCart())}
            >
                <ShoppingBasket />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
