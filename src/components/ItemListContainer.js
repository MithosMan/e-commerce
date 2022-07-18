import React, {useState, useEffect} from 'react';
import Conteo from './ItemCount';
import ItemList from './ItemList';
import React from 'react';
import toro from "./img/toro-creta.jpg";
import yegua from "./img/yeguas-diomedes.jpg";
import jabali from "./img/jabali-erimanto.jpg";

const archivos = [
    {id: 1, imagen: toro, titulo: "Toro de Creta"},
    {id: 2, imagen: yegua, titulo: "Yeguas de Diómedes"},
    {id: 3, imagen: jabali, titulo: "Jabalí de Erimanto"}
  ]

let {propName: nombre}={propName: "Futuro listado de criaturas fantasticas"}; 

function ListContainer (texto){

  const [data, setData] = useState([]);

  useEffect (()=> {
    const getData =new Promise(resolve => 
      setTimeout(() => {resolve(archivos)},1000));
  });
  getData.then(respuesta => setData(respuesta))
  const onAdd = (valor) => {
    console.log("Compraste "+valor+" unidades de "+texto)
  }

  return (
    <p>Listado provisional:
      <div>{nombre}</div>
      <ItemList data = {data}/>
      <Conteo initial={1} stock={5} onAdd={onAdd}/>
    </p>
    );
  }

  export default ListContainer