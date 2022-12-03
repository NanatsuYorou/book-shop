import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import BooksItem from './booksItem'


export default function BooksList() {
  
  const books = useSelector(state => state.app.books)

  return (
    <Grid container spacing={0.5} rowSpacing={"20"} sx={{mt: '10px'}}>
      {
        books.map(book => (
          <Grid item xs={8} md={4}  key={book.id} component="li">
              <BooksItem {...book} />
          </Grid>
        ))
      }    
    </Grid>
  )
}
