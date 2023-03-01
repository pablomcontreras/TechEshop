import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faTrash } from "@fortawesome/free-solid-svg-icons";
import { trimDesc } from "../Services/AuxServices";
import { deleteItem } from "../Services/DataProvider";

function TarjetaFavorito(props) {
  const handleBuy = () => {
    window.open(props.producto.permalink, "_blank");
  };

  const handleBorrar = (id) => {
    deleteItem(id);
    props.favChange()
  };

  return (
    <Container>
      <Row className="card-fav">
        <Col sm={10}>
          <h3>{props.producto.title}</h3>
          <p className="text-justify">
            {trimDesc(props.producto.description)} Precio: ${props.producto.price}
          </p>
        </Col>
        <Col sm={2}>
          <Row id="rowimg">
            <Image
              fluid={true}
              alt={props.producto.title}
              src={props.producto.thumbnail}
              className="img-fav"
            />
          </Row>
          <Row>
            <Button
              className="mx-auto add-to-cart btn btn-default"
              type="button"
              title="Comprar en MercadoLibre"
              onClick={handleBuy}>
              <FontAwesomeIcon icon={faHandshake} className="mx-3" />
              comprar
            </Button>
            <Button
              className="mx-auto  btn btn-warning"
              type="button"
              title="Borrar"
              onClick={() => handleBorrar(props.producto.id)}>
              <FontAwesomeIcon icon={faTrash} className="mx-3" />
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TarjetaFavorito;
