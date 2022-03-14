import './App.css';
import Navv from './components/Navv';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navv/>
      <ItemDetailContainer nombre="E-commerce Tia Pato"/>
    </div>
  );
}

export default App;