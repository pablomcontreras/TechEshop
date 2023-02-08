import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function Menu(props) {
  return (
    <Navbar bg="light" variant="light" expand="lg">
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
            />
            <Button variant="outline-secondary">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
