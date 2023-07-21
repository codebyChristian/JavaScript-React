import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produtos from './produtos';
import TelaCar from './tela_car';




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/TelaCar" element={< TelaCar />} />
      </Routes>
    </Router>
  
  );
}

export default App;
