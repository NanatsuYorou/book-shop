import { ListItem, ListItemText, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import {removeBook} from '../store/bookSlice'
import React from 'react'

export default function ShoppingCartItem({book}) {

  const dispatch = useDispatch()
    
  return (
    <ListItem sx={{heigth: '180px'}}>
        <Typography>{book.name}</Typography>
        <Typography>{book.author}</Typography>
        <Typography>{book.price}</Typography>
        <Typography component="span" onClick={() => dispatch(removeBook(book))}>
            &times;
        </Typography>
    </ListItem>
  )
}
