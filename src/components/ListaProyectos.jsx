import { useState, useEffect } from 'react';
import proyectoService from '../services/proyectoService';
import ProyectoCard from './ProyectoCard';
import RegistroActividad from './RegistroActividad';
const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );
    const [buscado,setBuscado] = useState("")

    const [agregaTitulo,setAgregaTitulo] = useState("")
    const [agregaCategoria,setAgregaCategoria] = useState("")
    const [agregaEstado,setAgregaEstado] = useState("")
    const [ultimaModificacion,setUltimaModificacion] = useState("")

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

    useEffect(() => {
        const fechaActual = new Date().toLocaleString();
        setUltimaModificacion(fechaActual);
    }, [proyectos]);

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
            
            <RegistroActividad fecha={ultimaModificacion} />

        </main>
    );
}

export default ListaProyectos;
