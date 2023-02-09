import React from 'react';

function TarjetaProducto(props) {
    const idProducto = props.id;
    
    return (
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={props.img}
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.title}</h5>
             {props.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <span className="btn btn-outline-dark mt-auto" >
                Ver Producto
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TarjetaProducto;