import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography, Badge} from '@mui/material'
import {openCart} from '../store/cartSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {

  const cartLen = useSelector(state => state.app.shoppingCart).length

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
              <Badge
              color="warning"
              badgeContent={cartLen}
              >
                <ShoppingBasket />
              </Badge>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
