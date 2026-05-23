import RegistroActividad from "./RegistroActividad";
const ProyectoCard = ({ proyecto, eliminarProyecto, verDetalle }) => {
    const { id, titulo, categoria, estado } = proyecto;
    return (
        <article>
            <h3>{titulo}</h3>
            <p>Categoría: {categoria}</p>
            <p>Estado: {estado}</p>
            <button onClick={() => verDetalle(proyecto)}>Ver Detalle</button>
            <button onClick={() => eliminarProyecto(id)}>Eliminar</button>
        </article>
    );
};
export default ProyectoCard;