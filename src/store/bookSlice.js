import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "bookSlice",
    initialState: {
        books: [
            {
                "id": 1,
                "name": "Технологические процессы и их контроль",
                "author": "Бурчаков Ш.А.",
                "img": "https://img-gorod.ru/29/455/2945546_detail.jpg",
                "price": 500
            },
            
            {
                "id": 2,
                "name": "Природные и химические волокна",
                "author": "Осовская И.И.",
                "img": "https://img-gorod.ru/29/455/2945543_detail.jpg",
                "price": 600
            },
            {
                "id": 3,
                "name": "Проблемы текстологии публицистики Достоевского",
                "author": "Панюкова Т.В.",
                "img": "https://img-gorod.ru/29/505/2950580_detail.jpg",
                "price": 700
            },
            {
                "id": 4,
                "name": "Основы искусственного интеллекта",
                "author": "Галыгина И.В., Галыгина Л.В.",
                "img": "https://img-gorod.ru/29/522/2952267_detail.jpg",
                "price": 800
            },
            {
                "id": 5,
                "name": "Основы флористики: учебное пособие",
                "author": "Тундалева И.С.",
                "img": "https://img-gorod.ru/29/560/2956020_detail.jpg",
                "price": 900
            },
            {
                "id": 6,
                "name": "Дао дэ цзин. Суждения и беседы Конфуция. Чжуан-цзы",
                "author": "Адаменко Е.",
                "img": "https://img-gorod.ru/29/600/2960044_detail.jpg",
                "price": 1000
            }
        ],
        shoppingCart: [],
        totalPrice: 0,
    },
    reducers: {
        buyBook(state, action){
            const toggledBook = state.books.find(book => book.id === action.payload.id)
            toggledBook.id = new Date().toISOString()
            state.shoppingCart.push(toggledBook)
            state.totalPrice += toggledBook.price
        },
        removeBook(state, action){
            state.shoppingCart = state.shoppingCart.filter(cartBook => cartBook.id !== action.payload.id)
            state.totalPrice -= action.payload.price
        }
    }
})

export const {buyBook, removeBook} = bookSlice.actions 

export default bookSlice.reducer
