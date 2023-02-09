import React from 'react';

function Spinner(props) {
    return (
      <div className='pt-5'>
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
          <div className="sr-only">Cargando...</div>
        </div>
      </div>
    );
}

export default Spinner;