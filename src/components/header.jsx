import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography>
                Books Shop
            </Typography>
            <IconButton>
                <ShoppingBasket />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
