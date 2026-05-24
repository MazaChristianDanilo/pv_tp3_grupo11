const RegistroActividad = ({ fecha }) => {
    return (
        <section>
            <h2>Registro de Actividad</h2>
            <p>Ultima Modificacion {fecha}</p>
        </section>
    );
};           

import { useEffect, useRef, useState } from "react";
import RegistroActividad from "./RegistroActividad";

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);


  const primerRender = useRef(true);


  const huboCambioReal = useRef(false);


  const agregarProyecto = (nuevoProyecto) => {
    huboCambioReal.current = true;

    setProyectos((prev) => [...prev, nuevoProyecto]);
  };

  const eliminarProyecto = (id) => {
    huboCambioReal.current = true;

    setProyectos((prev) =>
      prev.filter((proyecto) => proyecto.id !== id)
    );
  };


  useEffect(() => {

    if (primerRender.current) {
      primerRender.current = false;
      return;
    }

    if (!huboCambioReal.current) {
      return;
    }


    setUltimaActualizacion(new Date());


    huboCambioReal.current = false;

  }, [proyectos]);


  const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar proyecto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {proyectosFiltrados.map((proyecto) => (
          <li key={proyecto.id}>
            {proyecto.nombre}

            <button onClick={() => eliminarProyecto(proyecto.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {ultimaActualizacion && (
        <RegistroActividad fecha={ultimaActualizacion} />
      )}
    </div>
  );
}

export default ListaProyectos;