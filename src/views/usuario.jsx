import React from 'react';
import { Container, Box, Typography, Paper, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';

const PerfilUsuario = () => {
  // Datos simulados del usuario (puedes adaptarlo si es alumno o docente)
  const usuario = {
    nombre: 'Juan Pérez',
    rol: ' Alumno',
    LU :'9999',
    institucion: 'Universidad Nacional de Jujuy',
    facultad:'Facultad de Ingenieria',
    correo: 'juan.perez@miuniversidad.edu',
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 6, mb: 4 }}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
          
          {/* Avatar con las iniciales del usuario */}
          <Avatar 
            sx={{ 
              width: 80, 
              height: 80, 
              margin: '0 auto 16px', 
              bgcolor: 'secondary.main',
              fontSize: '2rem'
            }}
          >
            {usuario.nombre.split(' ').map(n => n[0]).join('')}
          </Avatar>

          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {usuario.nombre}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
            {usuario.rol}
          </Typography>

          <Divider sx={{ mb: 2 }} />

          {/* Lista de Detalles del Perfil */}
          <List disablePadding>
            <ListItem disableGutters>
              <ListItemText 
                primary="Institución" 
                secondary={usuario.institucion} 
                primaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
                secondaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 'medium' } }}
              />
            </ListItem>
            <Divider component="li" />
            
            <ListItem disableGutters>
              <ListItemText 
                primary="Correo Electrónico" 
                secondary={usuario.correo} 
                primaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
                secondaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 'medium' } }}
              />
            </ListItem>
            <Divider component="li" />

            <ListItem disableGutters>
              <ListItemText 
                primary="Matrícula / Legajo" 
                secondary={usuario.legajo} 
                primaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
                secondaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 'medium' } }}
              />
            </ListItem>
          </List>

        </Paper>
      </Box>
    </Container>
  );
};

export default PerfilUsuario;