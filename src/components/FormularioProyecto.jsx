import { useState } from "react";
const FormularioProyecto = ({ onAgregar }) => {
  const [recursos, setRecursos] = useState({
    pdf: "",
    drive: "",
    github: "",
  });
  const [equipo, setEquipo] = useState({
    nombre1: "",
    nombre2: "",
    nombre3: "",
    rol1: "",
    rol2: "",
    rol3: "",
  });
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "",
  });
  const [detalle, setDetalle] = useState("");

  const handleAgregar = () => {
    onAgregar({
      id:Date.now(),
      titulo: formulario.titulo,
      categoria: formulario.categoria,
      estado: formulario.estado,
      detalle: detalle,
      recursos: [
        { id: Date.now(), tipo: "PDF", url: recursos.pdf },
        { id: Date.now() + 1, tipo: "Drive", url: recursos.drive },
        { id: Date.now() + 2, tipo: "GitHub", url: recursos.github },
      ],
      equipo: [
        { id: Date.now(), nombre: equipo.nombre1, rol: equipo.rol1 },
        { id: Date.now() + 1, nombre: equipo.nombre2, rol: equipo.rol2 },
        { id: Date.now() + 2, nombre: equipo.nombre3, rol: equipo.rol3 },
      ],
    });
  };
  return (
    <div>
      {/*seccion de agregar*/}
      <section>
        <input
          type="text"
          placeholder="titulo del proyecto"
          onChange={(e) =>
            setFormulario({ ...formulario, titulo: e.target.value })
          }
        ></input>

        <input
          type="text"
          placeholder="categoría"
          onChange={(e) =>
            setFormulario({ ...formulario, categoria: e.target.value })
          }
        ></input>

        <input
          type="text"
          placeholder="estado"
          onChange={(e) =>
            setFormulario({ ...formulario, estado: e.target.value })
          }
        ></input>
        <input
          type="text"
          placeholder="detalles del proyecto"
          onChange={(detalle) => setDetalle(detalle.target.value)}
        ></input>
        {/* Recursos */}
        <input
          type="text"
          placeholder="URL del PDF"
          onChange={(p) => setRecursos({ ...recursos, pdf: p.target.value })}
        ></input>
        <input
          type="text"
          placeholder="URL del Drive"
          onChange={(d) => setRecursos({ ...recursos, drive: d.target.value })}
        ></input>
        <input
          type="text"
          placeholder="URL del GitHub"
          onChange={(g) => setRecursos({ ...recursos, github: g.target.value })}
        ></input>

        {/* Equipo */}
        <input
          type="text"
          placeholder="Integrente del Equipo "
          onChange={(u) => setEquipo({ ...equipo, nombre1: u.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Rol en el Equipo "
          onChange={(ru) => setEquipo({ ...equipo, rol1: ru.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Integrente del Equipo "
          onChange={(d) => setEquipo({ ...equipo, nombre2: d.target.value })}
        ></input>

        <input
          type="text"
          placeholder="Rol en el Equipo "
          onChange={(rd) => setEquipo({ ...equipo, rol2: rd.target.value })}
        ></input>

        <input
          type="text"
          placeholder="Integrente del Equipo "
          onChange={(t) => setEquipo({ ...equipo, nombre3: t.target.value })}
        ></input>

        <input
          type="text"
          placeholder="Rol en el Equipo "
          onChange={(rt) => setEquipo({ ...equipo, rol3: rt.target.value })}
        ></input>

        <button onClick={() => handleAgregar()}>agregar proyecto</button>
      </section>
    </div>
  );
};

export default FormularioProyecto;
