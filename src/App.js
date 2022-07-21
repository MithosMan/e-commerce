import React from 'react';
import './App.css';
import Navegacion from './components/NavBar';
import ListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
    <Navegacion />
    <ListContainer texto={"Gorgona"}/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
