import { useState } from "react";
import ProyectoCard from "./ProyectoCard";

const ListaProyectos = ({
    proyectos,
    handleEliminar,
    handleAgregar,
    handleBuscar
}) => {

    const [agregaTitulo, setAgregaTitulo] = useState("");
    const [agregaCategoria, setAgregaCategoria] = useState("");
    const [agregaEstado, setAgregaEstado] = useState("");
    const [buscado, setBuscado] = useState("");

    return (

        <main>

            {/* agregar proyecto */}
            <section>

                <input
                    type="text"
                    placeholder="titulo del proyecto"
                    onChange={(titulo) =>
                        setAgregaTitulo(titulo.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="categoría"
                    onChange={(categoria) =>
                        setAgregaCategoria(categoria.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="estado"
                    onChange={(estado) =>
                        setAgregaEstado(estado.target.value)
                    }
                />

                <button
                    onClick={() =>
                        handleAgregar(
                            agregaTitulo,
                            agregaCategoria,
                            agregaEstado
                        )
                    }
                >
                    agregar proyecto
                </button>

            </section>

            {/* búsqueda */}
            <section>

                <input
                    type="text"
                    placeholder="titulo del proyecto"
                    onChange={(entrada) =>
                        setBuscado(entrada.target.value)
                    }
                />

                <button
                    onClick={() => handleBuscar(buscado)}
                >
                    buscar proyecto
                </button>

            </section>

            <h2>Lista de Proyectos</h2>

            {
                proyectos.map((proyecto) => (

                    <ProyectoCard
                        key={proyecto.id}
                        proyecto={proyecto}
                        eliminarProyecto={handleEliminar}
                        verDetalle={handleBuscar}
                    />

                ))
            }

        </main>

    );
};

export default ListaProyectos;