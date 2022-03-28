import './App.css';
import Navv from './components/Navv';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import MiProvider from './components/CartContext';

function App() {

  return (
    <div className="App">
      <MiProvider>

        <BrowserRouter>

          <Navv />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}/>
          </Routes>
          <ToastContainer />

        </BrowserRouter>

      </MiProvider>

    </div>
  );
}

export default App;