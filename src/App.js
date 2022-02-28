import './App.css';
import Navv from './components/Navv';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navv/>
      <ItemListContainer nombre="Tia Pato"/>
      <h1>React-TiaPato</h1>
    </div>
  );
}

export default App;
