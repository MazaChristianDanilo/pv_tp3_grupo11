import { useNavigate } from "react-router-dom";
import RegistroActividad from "./RegistroActividad";
const ProyectoCard = ({ proyecto, eliminarProyecto}) => {
    const { id, titulo, categoria, estado } = proyecto;
    const navigate = useNavigate();
    return (
        <article>
            <h3>{titulo}</h3>
            <p>Categoría: {categoria}</p>
            <p>Estado: {estado}</p>
            <button onClick={() => navigate(`/proyectos/${id}`)}>Ver Detalle</button>
            <button onClick={() => eliminarProyecto(id)}>Eliminar</button>
        </article>
    );
};
export default ProyectoCard;