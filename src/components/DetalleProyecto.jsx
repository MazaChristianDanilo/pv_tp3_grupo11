import "styles.css";
const DetalleProyecto = ({ proyecto,volver }) => {
  const { recursos, detalle, equipo } = proyecto;
  return (
    <div>
      <h1>Detalle del Proyecto</h1>
      <p style={{ whiteSpace: "pre-line" }}>{detalle}</p>
      <h3>Recursos del Proyecto</h3>
       <ul>
      {
      recursos.map((recurso) => (
        <li key={recurso.id}><a href="#">{recurso.tipo}</a></li>
    
      ) )
     }
     </ul>
     <h3>Equipo - roles</h3>
     <ul>
     {
       equipo.map((integrante) => (
        <li key ={integrante.id}>{integrante.nombre } - {integrante.rol} </li>
      ) )
      }
      </ul>
      <button onClick={() =>volver(null)}>volver</button>

    </div>
  );
};
export default DetalleProyecto;
