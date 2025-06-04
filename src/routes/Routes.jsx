import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Boost from '../pages/Boost';
import Home from '../pages/Home'


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>

        {/* Rota para "Sistema de Boost" */}
        <Route path="/boost" element={<Boost />} />

        {/* Rota para "Provações" */}
        {/* <Route path="/provacoes" element={<Provacoes />} /> */}

        {/* Rota para "Mapas" */}
        {/* <Route path="/mapas" element={<Mapas />} /> */}

        {/* Rota para "Wanted Pirates" */}
        {/* <Route path="/wanted-pirates" element={<WantedPirates />} /> */}

       
        {/* Rota “coringa” para página 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
