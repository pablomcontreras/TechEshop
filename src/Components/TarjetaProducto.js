import React from 'react';
import { Link } from 'react-router-dom';
import { trimTitle } from '../Services/AuxServices';

function TarjetaProducto(props) {
    
  //Prop a usar cuando se renderice el detalle
  const idProducto = props.id;

    return (
      <div className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top" src={props.img} alt="..." />
          <div className="card-body p-1 align-middle">
            <div className="text-justify align-middle">
              <h5 className="fw-bolder m-3">{trimTitle(props.title)}</h5>${" "}
              {props.price.toLocaleString("es-AR")}
            </div>
          </div>
          <div className="card-footer  pt-0 border-top-0 bg-transparent">
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