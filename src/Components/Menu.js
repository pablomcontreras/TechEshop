import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

function Menu({ traerSearchterm }) {
  // eslint-disable-next-line
  let [searchTerm, setSearchterm] = useState();

  const handleSearch = (event) => {
    traerSearchterm(searchTerm);
  };

  const handleChange = (event) => {
    searchTerm = event.target.value;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <img
              alt=""
              src="/isologo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Tech Eshop
          </Link>
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
              onSubmit={handleSearch}
              onKeyDown={handleKeyPress}
            />
            <Link
              to="/"
              className="btn btn-outline-dark mt-auto"
              onClick={handleSearch}>
              Buscar
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
