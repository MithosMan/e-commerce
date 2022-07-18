import React,{useState} from 'react';

export const Conteo = (stock,initial,onAdd) => {
    const [cuenta, setCuenta] = useState(initial);

    const resta = () => {
        setCuenta(cuenta - 1)
    }

    const suma = () => {
        setCuenta(cuenta + 1)
    }

  return (
      <div className='contador'>
          <button disabled={cuenta<=1} onClick={resta}>-</button>
          <span>{cuenta}</span>
          <button disabled={cuenta>=stock} onClick={suma}>+</button>
          <div>
              <button disabled={stock<=0} onClick={()=>onAdd(cuenta)}>Agregar al carrito</button>
          </div>

      </div>

    );
  }

  export default Conteo