import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produtos from './produtos';
import TelaCar from './tela_car';



function App() {

  const [carrinho, setCarrinho] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Produtos carrinho={carrinho} setCarrinho={setCarrinho} />} />
        <Route path="/TelaCar" element={<TelaCar carrinho={carrinho} setCarrinho={setCarrinho} />} />
      </Routes>
    </Router>
  
  );
}

export default App;
