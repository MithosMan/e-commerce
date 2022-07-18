import React from 'react';
import Item from './Item';

  const ItemList = (data =[]) => {
  
  return (
      data.map(archivos => <Item key={archivos.id} info={archivos}/>)
    );
  }


export default ItemList