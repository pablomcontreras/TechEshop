import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import LoginPage from '../Pages/LoginPage';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import RegisterPage from '../Pages/RegisterPage';

function RouterTable(props) {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    );
}

export default RouterTable;