import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//SCSS Global
import './global.scss';

//pages

import Home from './components/pages/home/Home.jsx';
import Menu from './components/menu/Menu';
import About from './components/pages/About/About.jsx';
import ConnectActions from './components/pages/connectActions/ConnectActions.jsx';
import Perfil from './components/pages/perfil/Perfil.jsx'
import Footer from './components/footer/Footer.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path='/acoesConnect' element={<ConnectActions />} />
        <Route path= "/about" element={<About />} />
        <Route path='/perfil' element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App