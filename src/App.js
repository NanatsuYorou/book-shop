import { Container } from '@mui/material';
import './App.css';
import BooksList from './components/booksList'
import Header from './components/header';
import Cart from './components/shoppingCart'


function App() {

  return (
        <div className="App">
              <Header />
              <Container>
                  <BooksList />
                  <Cart />
              </Container>
        </div>
  );
}

export default App;
