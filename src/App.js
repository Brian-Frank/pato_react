import './App.css';
import Navv from './components/Navv';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './components/Carrito';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navv />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/Tortas' element={<ItemDetailContainer />} />
          <Route path='/Bandejas' element={<ItemDetailContainer />} />
          <Route path='/Carrito' element={<Carrito />} />
        </Routes>
        <ToastContainer />

      </BrowserRouter>
    </div>
  );
}

export default App;