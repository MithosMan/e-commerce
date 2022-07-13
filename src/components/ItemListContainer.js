import React from 'react';
import Conteo from './ItemCount';



function ListContainer (texto){
  let {propName: nombre}={propName: texto}; 
  const onAdd = (valor) => {
    console.log("Compraste "+valor+" unidades de "+nombre)
  }

  return (
    <p>Listado provisional:
      <div>{nombre}</div> 
      <Conteo initial={1} stock={5} onAdd={onAdd}/>
    </p>
    );
  }

  export default ListContainer