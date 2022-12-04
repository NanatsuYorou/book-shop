import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import {buyBook} from '../store/bookSlice'


export default function BooksItem({id, name, author, img, price}) {

    const dispatch = useDispatch()

  return (
    <Card sx={{width: 250, height: 450}}>
        <CardMedia
        image={img}
        component="img"
        title={name}
        alt={name}
        sx={{height: 'auto', maxHeight: 300, width: 200, size: 'contain', margin: '0 auto' }}
        />
            <CardContent>
                <Typography
                variant="body2"
                component="p"
                >
                    {name}
                </Typography>
                <Typography
                variant="body2"
                color="#aeaeae"
                >
                    {author}
                </Typography>
                <Divider />
            </CardContent>
            <CardActions sx={{paddingLeft: '20px', paddingRight: '20px' }}>
                <Typography variant="body2" component="p" sx={{fontWeight: 700}}>
                    Цена: {price}
                </Typography>
                <Button sx={{marginLeft: 'auto'}} size="small" onClick={() => dispatch(buyBook({name, price, id}))}>Купить</Button>
            </CardActions>
    </Card>
  )
}
