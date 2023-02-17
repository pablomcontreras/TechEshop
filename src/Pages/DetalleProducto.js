/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById, getItemDescription } from "../Services/DataProvider";
import Header from "../Components/Header";
import Spinner from "../Components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import { faBackward, faHandshake, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

function DetalleProducto(props) {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const [description, setDescription] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        const description = await getItemDescription(id);
        setProducto(response?.data);
        setDescription(description?.data.plain_text);
      } catch (e) {
        console.log(e);
      } finally {
        setCargando(false);
      }
    };

    request();
  }, [id]);

  console.log("Producto:", producto);
  console.log("Descripcion: ", description);

  //Mientras el estado Cargando no se resuelva muestra el Spinner.
  if (cargando) {
    return (
      <>
        <Header />
        <Spinner />
      </>
    );
  } else {
    return (
      <Container className="marginBottom">
        <div>
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="details col-md-6">
                  <h3 className="product-title">{producto.title}</h3>
                  <div className="rating">
                    <div className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>
                  <p className="text-justify product-description">
                    {description}
                  </p>
                  <h4 className="price">
                    Precio:{" "}
                    <span>$ {producto.price.toLocaleString("es-AR")}</span>
                  </h4>
             
                  <div className="action">
                    <button
                      className="mx-auto add-to-cart btn btn-default"
                      type="button"
                    title="Comprar en MercadoLibre">
                      <FontAwesomeIcon icon={faHandshake} className="mx-3"/>
                        comprar
                    </button>
                    <button
                      className="mx-2 add-to-cart btn btn-default"
                      type="button"
                    title="Agegar a favoritos...">
                      <FontAwesomeIcon icon={faHeart} />
                      
                    </button>
                    <button
                      className="max-auto add-to-cart btn btn-default"
                      type="button"
                    title="Volver al listado">
                      <FontAwesomeIcon icon={faBackward} />
                   
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default DetalleProducto;
