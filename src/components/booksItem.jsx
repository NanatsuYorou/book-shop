import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import {buyBook} from '../store/slice'


export default function BooksItem({id, name, author, img, price}) {

    const dispatch = useDispatch()

  return (
    <Card sx={{width: 250, height: 450}}>
        <CardMedia
        image={img}
        component="img"
        title={name}
        alt={name}
        sx={{height: 'auto', maxHeight: 300, width: 200, size: 'contain' }}
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
                <Typography
                variant="body2"
                component="p"
                >
                    {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => dispatch(buyBook({name, price, id}))}>Купить</Button>
            </CardActions>
    </Card>
  )
}
