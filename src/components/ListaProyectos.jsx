import { useState } from 'react';
import proyectoService from '../services/proyectoService';
const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    return (
        <main>
            <h2>Lista de Proyectos</h2>

            {proyectos.map(proyecto => (
                <div key={proyecto.id}>
                    <h3>{proyecto.titulo}</h3>
                    <p>Categoría: {proyecto.categoria}</p>
                    <p>Estado: {proyecto.estado}</p>
                </div>
            ))

            }

        </main>
    );
}

export default ListaProyectos;