import './App.css';
import Navv from './components/Navv';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navv />
      <ItemDetailContainer nombre="E-commerce Tia Pato" />
      <ToastContainer/>
    </div>
  );
}

export default App;