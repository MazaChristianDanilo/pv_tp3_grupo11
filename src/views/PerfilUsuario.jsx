import { useContext, useState } from "react";
import {
  Container,Box,Typography,Paper,Avatar,List,ListItem,ListItemText,Divider,Button,TextField,
} from "@mui/material";
import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [formulario, setFormulario] = useState({ ...usuario });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };
  const handleGuardar = (e) => {
    e.preventDefault();
    actualizarPerfil(formulario);
    setModoEdicion(false);
  };
  const handleCancelar = () => {
    setFormulario({ ...usuario });
    setModoEdicion(false);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 6, mb: 4 }}>
        <Paper
          elevation={4}
          sx={{ p: 4, borderRadius: 3, textAlign: "center" }}
        >
          {/* Avatar con las iniciales del usuario */}
          <Avatar
            sx={{
              width: 80,
              height: 80,
              margin: "0 auto 16px",
              bgcolor: "secondary.light",
              fontSize: "2rem",
            }}
          >
            {usuario.nombre
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
          {modoEdicion ? (
            <>
              <form onSubmit={handleGuardar}>
                <TextField
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  color = "secondary"
                />
                <TextField
                  name="rol"
                  value={formulario.rol}
                  onChange={handleChange}
                  label="Rol"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  color = "secondary"
                />
                <TextField
                  name="dni"
                  value={formulario.dni}
                  onChange={handleChange}
                  label="DNI"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  color = "secondary"
                />
                <TextField
                  name="institucion"
                  value={formulario.institucion}
                  onChange={handleChange}
                  label="institucion"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  color = "secondary"
                />
                <Button type="Submit">Guardar</Button>
                <Button onClick={handleCancelar}>Cancelar</Button>
              </form>
            </>
          ) : (
            <>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold", color: "secondary.light" }}
              >
                {usuario.nombre}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ fontStyle: "italic", mb: 3 }}
              >
                {usuario.rol}
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {/* Lista de Detalles del Perfil */}
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Institución"
                    secondary={usuario.institucion}
                    slotProps={{
                      primary: { variant: "caption", color: "text.secondary" },
                      secondary: { variant: "body1" },
                    }}
                  />
                </ListItem>
                <Divider component="li" />

                <ListItem disableGutters>
                  <ListItemText
                    primary="DNI"
                    secondary={usuario.dni}
                    slotProps={{
                      primary: { variant: "caption", color: "text.secondary" },
                      secondary: { variant: "body1" },
                    }}
                  />
                </ListItem>
              </List>
              <Button variant="contained" onClick={() => setModoEdicion(true)}>
                Editar
              </Button>
            </>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default PerfilUsuario;
