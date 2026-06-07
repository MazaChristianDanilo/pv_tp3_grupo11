import { useState } from "react";
import { TextField, Button, Paper, Stack, Typography } from "@mui/material";
const FormularioProyecto = ({ onAgregar }) => {
  const [recursos, setRecursos] = useState({
    pdf: "",
    drive: "",
    github: "",
  });
  const [equipo, setEquipo] = useState({
    nombre1: "",
    nombre2: "",
    nombre3: "",
    rol1: "",
    rol2: "",
    rol3: "",
  });
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "",
  });
  const [detalle, setDetalle] = useState("");

  const handleAgregar = () => {
    onAgregar({
      id:Date.now(),
      titulo: formulario.titulo,
      categoria: formulario.categoria,
      estado: formulario.estado,
      detalle: detalle,
      recursos: [
        { id: Date.now(), tipo: "PDF", url: recursos.pdf },
        { id: Date.now() + 1, tipo: "Drive", url: recursos.drive },
        { id: Date.now() + 2, tipo: "GitHub", url: recursos.github },
      ],
      equipo: [
        { id: Date.now(), nombre: equipo.nombre1, rol: equipo.rol1 },
        { id: Date.now() + 1, nombre: equipo.nombre2, rol: equipo.rol2 },
        { id: Date.now() + 2, nombre: equipo.nombre3, rol: equipo.rol3 },
      ],
    });
  };
return (
  <Paper sx={{ p: 4, mt: 3 }}>
    <Typography variant="h4" gutterBottom>
      Nuevo Proyecto
    </Typography>

    <Stack spacing={2}>

      <TextField
        label="Título del Proyecto"
        onChange={(e) =>
          setFormulario({
            ...formulario,
            titulo: e.target.value,
          })
        }
      />

      <TextField
        label="Categoría"
        onChange={(e) =>
          setFormulario({
            ...formulario,
            categoria: e.target.value,
          })
        }
      />

      <TextField
        label="Estado"
        onChange={(e) =>
          setFormulario({
            ...formulario,
            estado: e.target.value,
          })
        }
      />

      <TextField
        label="Detalle del Proyecto"
        multiline
        rows={3}
        onChange={(e) => setDetalle(e.target.value)}
      />

      <Typography variant="h6">
        Recursos
      </Typography>

      <TextField
        label="URL del PDF"
        onChange={(e) =>
          setRecursos({
            ...recursos,
            pdf: e.target.value,
          })
        }
      />

      <TextField
        label="URL del Drive"
        onChange={(e) =>
          setRecursos({
            ...recursos,
            drive: e.target.value,
          })
        }
      />

      <TextField
        label="URL de GitHub"
        onChange={(e) =>
          setRecursos({
            ...recursos,
            github: e.target.value,
          })
        }
      />

      <Typography variant="h6">
        Equipo de Trabajo
      </Typography>

      <TextField
        label="Integrante 1"
        onChange={(e) =>
          setEquipo({
            ...equipo,
            nombre1: e.target.value,
          })
        }
      />

      <TextField
        label="Rol Integrante 1"
        onChange={(e) =>
          setEquipo({
            ...equipo,
            rol1: e.target.value,
          })
        }
      />

      <TextField
        label="Integrante 2"
        onChange={(e) =>
          setEquipo({
            ...equipo,
            nombre2: e.target.value,
          })
        }
      />

      <TextField
        label="Rol Integrante 2"
        onChange={(e) =>
          setEquipo({
            ...equipo,
            rol2: e.target.value,
          })
        }
      />

      <TextField
        label="Integrante 3"
        onChange={(e) =>
          setEquipo({
            ...equipo,
            nombre3: e.target.value,
          })
        }
      />

      <TextField
        label="Rol Integrante 3"
        onChange={(e) =>
          setEquipo({
            ...equipo,
            rol3: e.target.value,
          })
        }
      />

      <Button
        variant="contained"
        onClick={handleAgregar}
      >
        Agregar Proyecto
      </Button>

    </Stack>
  </Paper>
);
};

export default FormularioProyecto;
