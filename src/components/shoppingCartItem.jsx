import { Grid, ListItem, ListItemText, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import {removeBook} from '../store/bookSlice'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import React from 'react'

export default function ShoppingCartItem({book}) {

  const dispatch = useDispatch()
    
  return (
    <ListItem sx={{heigth: '180px'}}>
      <Grid container  justifyContent="space-between" alignItems="center">
        <Grid item xs={10} md={11}>
            <Grid item>
              <Typography>{book.name}</Typography>
              <Typography color={'#aeaeae'} >{book.author}</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{fontWeight: 700}}>Цена: {book.price}</Typography>      
            </Grid>
        </Grid>
        <Grid item xs={2} md={1}>
          <DeleteRoundedIcon color="warning" sx={{cursor: 'pointer'}} onClick={() => dispatch(removeBook(book))} />
        </Grid>
      </Grid>
    </ListItem>
  )
}
