import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import toro from "./img/toro-creta.jpg";
import yegua from "./img/yeguas-diomedes.jpg";
import jabali from "./img/jabali-erimanto.jpg";

const lista = [
    {id: 1, imagen: toro, titulo: "Toro de Creta"},
    {id: 2, imagen: yegua, titulo: "Yeguas de Diómedes"},
    {id: 3, imagen: jabali, titulo: "Jabalí de Erimanto"}
  ]

const ListContainer = () => {
  const [items, setItems] = useState([])

  const traerItems = () => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(lista)
      }, 2000)
    }) 
  }

  useEffect(()=>{
    traerItems().then(res =>{
      setItems(res)
    })
  },[])


  return (
  <ItemList items={items} />
  )
}

  export default ListContainer