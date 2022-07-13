import React from 'react';
import Conteo from './ItemCount';

let {propName: nombre}={propName: "Futuro listado de criaturas fantasticas"}; 

function ListContainer (texto){

  const onAdd = (valor) => {
    console.log("Compraste "+valor+" unidades de "+texto)
  }

  return (
    <p>Listado provisional:
      <div>{nombre}</div> 
      <Conteo initial={1} stock={5} onAdd={onAdd}/>
    </p>
    );
  }

  export default ListContainer