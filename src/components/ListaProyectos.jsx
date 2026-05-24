import { useState, useEffect } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";
import RegistroActividad from "./RegistroActividad.jsx";
import FormularioProyecto from "./FormularioProyecto.jsx";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [buscado, setBuscado] = useState("");


  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const [ultimaModificacion, setUltimaModificacion] = useState("");

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleBuscar = (titulo) => {
    setProyectos(proyectoService.buscarProyecto(titulo));
  };

  const handleAgregadoNuevo = (nuevo)=> {
    proyectoService.agregarProyecto(nuevo);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const handleVerDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  useEffect(() => {
    const fechaActual = new Date().toLocaleString();
    setUltimaModificacion(fechaActual);
  }, [proyectos]);

  if (proyectoSeleccionado) {
    return (
      <DetalleProyecto
        proyecto={proyectoSeleccionado}
        volver={setProyectoSeleccionado}
      />
    );
  }


  return (
    <main>
      <FormularioProyecto onAgregar={handleAgregadoNuevo}/>

      {/*seccion busqueda de proyecto*/}

      <section>
        <input
          type="text"
          placeholder="titulo del proyecto "
          onChange={(entrada) => setBuscado(entrada.target.value)}
        ></input>
        <button onClick={() => handleBuscar(buscado)}>buscar proyecto</button>
      </section>

      <h2>Lista de Proyectos</h2>

      {proyectos.map((proyecto) => (
        <ProyectoCard
          key={proyecto.id}
          proyecto={proyecto}
          eliminarProyecto={handleEliminar}
          verDetalle={handleVerDetalle}
        />
      ))}
      <RegistroActividad fecha={ultimaModificacion} />
    </main>
  );
};

export default ListaProyectos;