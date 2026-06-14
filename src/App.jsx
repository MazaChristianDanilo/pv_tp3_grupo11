import { useState } from 'react';
import ListaProyectos from './components/ListaProyectos';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import DetalleProyecto from './components/DetalleProyecto';
import {Route,BrowserRouter as Router, Routes,Navigate} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';
import {UsuarioProvider} from "./context/UsuarioContext"

const App = () => {
    return (
      <UsuarioProvider>
      <Router>
        <>
          <Header />
          <Nav />
          <Routes>
            <Route path = "/"  element={<Navigate to = "/inicio" />} />
            <Route path= "/inicio"  element={<Dashboard/>}/>
            <Route path= "/proyectos"  element={<ListaProyectos/>} />
            <Route path="/perfil" element = {<PerfilUsuario/>} />
            <Route path="/proyectos/:id" element ={<DetalleProyecto/>}/>
          </Routes>
          {/*<ListaProyectos/>*/}
          <Footer />
        </>
      </Router>
      </UsuarioProvider>
      );
    };

export default App;
