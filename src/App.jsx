import { useState } from 'react'
//import './css/styles.css';
//import './components/ListaProyectos.css';
import ListaProyectos from './components/ListaProyectos';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
const App = ()=>{
  return(
    <>
    <Header/>
    <Nav/>
    <ListaProyectos/>
    <Footer/>
    </>


  )
}

export default App
