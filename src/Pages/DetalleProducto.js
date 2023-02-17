/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getById, getItemDescription } from "../Services/DataProvider";
import Header from "../Components/Header";
import Spinner from "../Components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faBackward,
  faHandshake,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";

const images = [];

function DetalleProducto(props) {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const [description, setDescription] = useState({});
  const { id } = useParams();

  console.log("PRODUCTO: ", producto);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        const description = await getItemDescription(id);
        setProducto(response?.data);

        producto.pictures?.map((picture) =>
          images.push({
            original: `${picture.url}`,
            thumbnail: `${picture.url}`,
          })
        );

        setDescription(description?.data.plain_text);
      } catch (e) {
        console.log(e);
      } finally {
        setCargando(false);
      }
    };

    request();
  }, [id]);

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
                  <ImageGallery items={images} />
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{producto.title}</h3>

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
                      <FontAwesomeIcon icon={faHandshake} className="mx-3" />
                      comprar
                    </button>
                    <button
                      className="mx-2 add-to-cart btn btn-default"
                      type="button"
                      title="Agegar a favoritos...">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button
                      className="add-to-cart btn btn-default"
                      type="button"
                      title="Volver al listado">
                      <Link to="/">
                        <FontAwesomeIcon icon={faBackward} />
                      </Link>
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
