import './App.css';
import Navv from './components/Navv';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navv/>
      <ItemListContainer nombre="E-commerce Tia Pato"/>
    </div>
  );
}

export default App;
