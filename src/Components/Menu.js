import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function Menu({ traerSearchterm }) {
  let searchTerm = '';
  const handleChange = (event) => {
    searchTerm = event.target.value;
    console.log("Valor de searchterm en componente Menu:", searchTerm);
  }

  const hadleSearch = () => {
    console.log("Click en buscar, se va a enviar desde Menu al componente RouterTable el valor:", searchTerm)
   traerSearchterm(searchTerm);
  }
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="/isologo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Tech Eshop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/registro">
              Registro
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar Productos..."
              className="me-2"
              aria-label="Buscar"
              name="busqueda"
              onChange={handleChange}
            />
            <Button variant="outline-secondary" onClick={hadleSearch}>
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
