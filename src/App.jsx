import { useState } from 'react';
import ListaProyectos from './components/ListaProyectos';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
    const [proyectos, setProyectos] = useState([
      {
        id: 1,
        titulo: 'Proyecto Desarrollo Web',
        categoria: 'Desarrollo Web',
        estado: 'En Progreso',
      },
      {
        id: 2,
        titulo: 'Proyecto MArketing',
        categoria: 'Marketing Digital',
        estado: 'Completado',
      },
    ]);

    const eliminarProyecto = (id) => {
        setProyectos(proyectos.filter(proyecto => proyecto.id !== id));
    };

    const verDetalle = (proyecto) => {
      console.log(proyecto);
    };

    return (
        <>
          <Header />
          <Nav />
          <ListaProyectos proyectos={proyectos} eliminarProyecto={eliminarProyecto} verDetalle={verDetalle} />
          <Footer />
        </>
      );
    };

export default App;
