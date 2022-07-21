import React from 'react';

const Item = (info) => {

return (
  <div className='col-2'>
  <a href='' className='archivo'>
    <img src={info.imagen} alt=''/>
    <p>{info.titulo}</p>
  </a>
  </div>
  );
}


export default Item