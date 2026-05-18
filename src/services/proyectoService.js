const proyectoService = (() => {
    let proyectos = [
        {
            id: 1,
            titulo: "Sistema escolar",
            categoria: "Desarrollo web",
            estado: "En progreso",
            detalle: "Este sistema permite gestionar alumnos, docentes y materias desde una plataforma centralizada. Fue desarrollado para una institución educativa de nivel secundario con más de 500 estudiantes activos.\n\nActualmente se encuentra en fase de integración con el módulo de calificaciones y asistencia. Se prevé su lanzamiento oficial para el próximo ciclo lectivo.",
            recursos: [

               { tipo: "PDF", url: "#" , id:1},
               { tipo: "Drive", url: "#", id:2},
               { tipo: "GitHub", url: "#", id:3},
            ],
            equipo: [
               { nombre: "Ana García", rol: "Frontend", id : 1},
               { nombre: "Luis Pérez", rol: "Backend", id : 2 },
               { nombre: "Marta López", rol: "Diseño UX",id: 3 },
             ],
        },
        {
            id: 2,
            titulo: "Aplicación de tareas",
            categoria: "Desarrollo móvil",
            estado: "Completado",
            detalle: "Aplicación móvil para organizar tareas personales y profesionales con recordatorios, etiquetas y prioridades. Compatible con Android e iOS.\n\nEl proyecto fue completado en tres meses y cuenta con más de 200 usuarios activos. Incluye sincronización en la nube y modo offline.",
            recursos: [
                { tipo: "PDF", url: "#", id: 1},
                { tipo: "Drive", url: "#" ,id: 2},
                { tipo: "GitHub", url: "#" , id:3},
             ],
             equipo: [
                { nombre: "Carlos Ruiz", rol: "Mobile Dev", id: 1},
                { nombre: "Sofía Méndez", rol: "QA Testing", id:2 },
             ],
        },
        
        {
            id: 3,
            titulo: "Sitio de comercio electrónico",
            categoria: "Desarrollo web",
            estado: "En progreso",
            detalle: "Plataforma de ventas online para una pequeña empresa de indumentaria. Incluye catálogo de productos, carrito de compras y pasarela de pagos.\n\nSe está trabajando en la integración con sistemas de envío y en la optimización para dispositivos móviles. El lanzamiento está previsto para el próximo trimestre.",
            recursos: [
                { tipo: "PDF", url: "#", id:1 },
                { tipo: "Drive", url: "#" , id:2 },
                { tipo: "GitHub", url: "#" , id:3 },
            ],
            equipo: [
                { nombre: "Diego Torres", rol: "Fullstack", id:1  },
                { nombre: "Valeria Núñez", rol: "Diseño UI", id:2  },
                { nombre: "Andrés Sosa", rol: "Backend" , id:3},
            ],
        },
        {
            id: 4,
            titulo: "Sistema de gestión de inventario",
            categoria: "Desarrollo de software",
            estado: "En progreso",
            detalle: "Software de escritorio para controlar el stock de productos en un depósito logístico. Permite registrar entradas, salidas y generar reportes automáticos.\n\nActualmente se está implementando el módulo de alertas por stock mínimo y la exportación de reportes en formato PDF y Excel.",
            recursos: [
                { tipo: "PDF", url: "#" , id:1 },
                { tipo: "Drive", url: "#" , id:2 },
                { tipo: "GitHub", url: "#", id:3  },
            ],
            equipo: [
                { nombre: "Romina Castro", rol: "Backend" , id:1},
                { nombre: "Pablo Fernández", rol: "Base de datos", id:2 },
            ],
        },
         
        {
            id: 5,
            titulo: "Aplicación de seguimiento de hábitos",
            categoria: "Desarrollo móvil",
            estado: "Completado",
            detalle: "App móvil que ayuda a los usuarios a construir y mantener hábitos saludables mediante un sistema de rachas, estadísticas y notificaciones diarias.\n\nEl proyecto fue finalizado con éxito y tiene una valoración promedio de 4.8 estrellas. Se planea una segunda versión con integración a dispositivos wearables.",
            recursos: [
                { tipo: "PDF", url: "#", id:1 },
                { tipo: "Drive", url: "#" , id:2},
                { tipo: "GitHub", url: "#" , id:3 },
            ],
            equipo: [
                { nombre: "Lucía Herrera", rol: "Mobile Dev" , id:1 },
                { nombre: "Martín Álvarez", rol: "UX Research" , id:2 },
                { nombre: "Camila Ríos", rol: "Diseño UI" , id:3 },
            ],
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