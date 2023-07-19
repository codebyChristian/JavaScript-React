import React from 'react';

import ListaProduto from './list_produtos';
import TelaCar from './tela_car';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={< ListaProduto />} />
        <Route path="/TelaCar" element={< TelaCar />} />
      </Routes>
    </Router>
  
  );
}

export default App;
