import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from './pages/index';
import { NovoProduto } from './pages/novoProduto'
import { Estoque } from './pages/estoque';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/novoProduto" element={<NovoProduto />} />
        <Route path="/estoque" element={<Estoque />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
