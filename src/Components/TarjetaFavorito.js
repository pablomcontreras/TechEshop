import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { trimDesc } from "../Services/AuxServices";

function TarjetaFavorito({ producto }) {
  const handleBuy = () => {
    window.open(producto.permalink, "_blank");
  };

  return (
    <Container>
      <Row className="card-fav">
        <Col sm={10}>
          <h3>{producto.title}</h3>
          <p className="text-justify">
            {trimDesc(producto.description)} Precio: ${producto.price}
          </p>
        </Col>
        <Col sm={2}>
          <Row id="rowimg">
            <Image
              fluid={true}
              alt={producto.title}
              src={producto.thumbnail}
              className="img-fav"
            />
          </Row>
          <Row>
            <Button as={Link} to="/" variant="primary">
              Go somewhere
            </Button>
            <Button
              className="mx-auto add-to-cart btn btn-default"
              type="button"
              title="Comprar en MercadoLibre"
              onClick={handleBuy}>
              <FontAwesomeIcon icon={faHandshake} className="mx-3" />
              comprar
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TarjetaFavorito;
