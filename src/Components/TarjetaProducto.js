import React from 'react';
import { Link } from 'react-router-dom';

function TarjetaProducto(props) {
    
  //Prop a usar cuando se renderice el detalle
  const idProducto = props.id;

    return (
      <div className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top" src={props.img} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{props.title}</h5>
              {props.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <Link
                to={`/detalle/${idProducto}`}
                className="btn btn-outline-dark mt-auto">
                Ver Producto
              </Link>

            </div>
          </div>
        </div>
      </div>
    );
}

export default TarjetaProducto;