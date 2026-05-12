import { useState } from 'react';
import proyectoService from '../services/proyectoService';

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );
    const [buscado,setBuscado] = useState("")

    const [agregaTitulo,setAgregaTitulo] = useState("")
    const [agregaCategoria,setAgregaCategoria] = useState("")
    const [agregaEstado,setAgregaEstado] = useState("")

    const handleEliminar = (id) => {    
          proyectoService.eliminarProyecto(id); 
          setProyectos(proyectoService.obtenerProyectos())
    };
    
    const handleBuscar = (titulo) => {
        setProyectos(proyectoService.buscarProyecto(titulo))
       
    };
    const handleAgregar = () => {
        proyectoService.agregarProyecto({
            id:proyectos.length+1,
            titulo:agregaTitulo,
            categoria:agregaCategoria,
            estado:agregaEstado,
        }
        )
         setProyectos(proyectoService.obtenerProyectos())
    };
    
    return (
        <main>
            {/*seccion de agregar*/}
            <section>
            <input type = "text" placeholder = "titulo del proyecto" onChange={(titulo) => setAgregaTitulo(titulo.target.value)}></input>
           
            <input type = "text" placeholder = "categoría" onChange={(categoria) => setAgregaCategoria(categoria.target.value)}></input>
           
            <input type = "text" placeholder = "estado" onChange={(estado) => setAgregaEstado(estado.target.value)}></input>

            <button onClick = {() => handleAgregar()} >agregar proyecto</button>

            </section>
            

            {/*seccion busqueda de proyecto*/}

            <section>
            
            <input type= "text" placeholder = "titulo del proyecto " onChange={(entrada) => setBuscado(entrada.target.value)}></input>
            <button onClick = {() => handleBuscar(buscado)} >buscar proyecto</button>
            </section>

            <h2>Lista de Proyectos</h2>

            {proyectos.map(proyecto => (
            
                <article>
                <div key={proyecto.id}>
                    <h3>{proyecto.titulo}</h3>
                    <p>Categoría: {proyecto.categoria}</p>
                    <p>Estado: {proyecto.estado}</p>
                </div>
                <button onClick={() => handleEliminar(proyecto.id)}>Eliminar</button>
                </article>
                
            ))

            }
            

        </main>
    );
}

export default ListaProyectos;