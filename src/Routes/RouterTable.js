import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import RegisterPage from "../Pages/RegisterPage";
import { useState } from "react";
import DetalleProducto from "../Pages/DetalleProducto";
import FavoritosPage from "../Pages/FavoritosPage";
import EditProfilePage from "../Pages/EditProfilePage";
import AuthProvider from "../Context/AuthContext";

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
      <AuthProvider>
        <Menu traerSearchterm={traerSearchTerm} />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard searchTerm={searchTerm} idProducto={traerIdProducto} />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route
            path="/detalle/:id"
            element={<DetalleProducto id={idSeleccionado} />}
          />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route path="/perfil" element={<EditProfilePage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default RouterTable;
