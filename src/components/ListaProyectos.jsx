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
            <label> titulo:</label>
            <input  onChange={(titulo) => setAgregaTitulo(titulo.target.value)}></input>
            <label> categoria:</label>
            <input  onChange={(categoria) => setAgregaCategoria(categoria.target.value)}></input>
            <label> estado:</label>
            <input  onChange={(estado) => setAgregaEstado(estado.target.value)}></input>
            
            <button onClick = {() => handleAgregar()} >agregar proyecto</button>
            <label> Proyecto Buscado:</label>
            <input  onChange={(entrada) => setBuscado(entrada.target.value)}></input>
            <button onClick = {() => handleBuscar(buscado)} >buscar proyecto</button>
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