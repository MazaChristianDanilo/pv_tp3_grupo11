const proyectoService = (() => {
    let proyectos = [
        {
            id: 1,
            titulo: "Sistema escolar",
            categoria: "Desarrollo web",
            estado: "En progreso",
        },
        {
            id: 2,
            titulo: "Aplicación de tareas",
            categoria: "Desarrollo móvil",
            estado: "Completado",
        },
        {
            id: 3,
            titulo: "Sitio de comercio electrónico",
            categoria: "Desarrollo web",
            estado: "En progreso",
        },
        {
            id: 4,
            titulo: "Sistema de gestión de inventario",
            categoria: "Desarrollo de software",
            estado: "En progreso",
        },
        {
            id: 5,
            titulo: "Aplicación de seguimiento de hábitos",
            categoria: "Desarrollo móvil",
            estado: "Completado",
        },

    ];

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = (nuevoProyecto) => {
        proyectos.push(nuevoProyecto);
    };

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== id);
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(proyecto => proyecto.titulo.toLowerCase().includes(texto.toLowerCase()));
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto,
    };


})();

export default proyectoService;