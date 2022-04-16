import './App.css';
import Navv from './components/Navv';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import MiProvider, { CartContextProvider } from './components/CartContext';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <CartContextProvider>

        <BrowserRouter>

          <Navv />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/categoria/:id' element={<ItemListContainer/>} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <ToastContainer />

        </BrowserRouter>

      </CartContextProvider>
      <Footer/>

    </div>
  );
}

export default App;