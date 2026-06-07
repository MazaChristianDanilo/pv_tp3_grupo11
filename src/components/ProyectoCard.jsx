import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@mui/material";

const ProyectoCard = ({ proyecto, eliminarProyecto }) => {

  const { id, titulo, categoria, estado } = proyecto;

  const navigate = useNavigate();

  return (
    <Card sx={{ mb: 2 }}>

      <CardContent>

        <Typography variant="h5">
          {titulo}
        </Typography>

        <Typography variant="body1">
          Categoría: {categoria}
        </Typography>

        <Typography variant="body1">
          Estado: {estado}
        </Typography>

      </CardContent>

      <CardActions>

        <Button
          variant="contained"
          onClick={() => navigate(`/proyectos/${id}`)}
        >
          Ver Detalle
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => eliminarProyecto(id)}
        >
          Eliminar
        </Button>

      </CardActions>

    </Card>
  );
};

export default ProyectoCard;