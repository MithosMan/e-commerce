import React from 'react';

const Item = (info) => {

return (
  <a href='' className='archivo'>
    <img src={info.imagen} alt=''/>
    <p>{info.titulo}</p>
  </a>
  );
}


export default Item