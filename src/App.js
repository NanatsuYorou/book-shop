import './App.css';
import BooksList from './components/booksList'
import Header from './components/header';
import Cart from './components/shoppingCart'


function App() {

  return (
        <div className="App">
              <Header />
              <BooksList />
              <Cart />
        </div>
  );
}

export default App;
