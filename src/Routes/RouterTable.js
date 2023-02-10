import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import RegisterPage from "../Pages/RegisterPage";
import { useState } from "react";

function RouterTable(props) {
  const [searchTerm, setSearchterm] = useState("");

  const traerSearchTerm = (searchTerm) => {
    setSearchterm(searchTerm);
    console.log("Se recibió en componente Routertable desde el componente menu el valor:", searchTerm, " ahora hay que enviar este valor a dashboard como prop y hacer que se actualice el listado");
  };

  return (
    <Router>
      <Menu traerSearchterm={traerSearchTerm} />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterTable;
