import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import RegisterPage from "../Pages/RegisterPage";
import { useState } from "react";
import DetalleProducto from "../Pages/DetalleProducto";

function RouterTable(props) {
  const [searchTerm, setSearchterm] = useState("");
  const [idSeleccionado, setIdSeleccionado] = useState('');

  const traerSearchTerm = (searchTerm) => {
    setSearchterm(searchTerm);
  };

  const traerIdProducto = (idSeleccionado) => {
    setIdSeleccionado(idSeleccionado);
  };

  return (
    <Router>
      <Menu traerSearchterm={traerSearchTerm} />
      <Routes>
        <Route path="/" element={<Dashboard searchTerm={searchTerm} idProducto={traerIdProducto} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/detalle/:id" element={<DetalleProducto id={idSeleccionado} />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterTable;
