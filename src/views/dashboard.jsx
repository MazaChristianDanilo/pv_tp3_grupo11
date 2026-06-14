import React from 'react';
import { Container, Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

const Dashboard = () => {
  // Datos simulados de las métricas
  const metricas = [
    { id: 1, titulo: 'Total de Proyectos', valor: '12', color: '#81d4fa' },
    { id: 2, titulo: 'Proyectos en Curso', valor: '5', color: '#2e7d32' },
    { id: 3, titulo: 'Tareas Pendientes', valor: '8', color: '#ed6c02' },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        {/* Banner de Bienvenida */}
        <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            ¡Bienvenido de nuevo al Sistema!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Aquí tienes un resumen general de tus actividades, proyectos asignados y el estado actual de tus tareas de aprendizaje.
          </Typography>
        </Paper>

        {/* Sección de Métricas */}
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'medium' }}>
          Métricas Generales
        </Typography>
        
        <Grid container spacing={3}>
          {metricas.map((metrica) => (
            <Grid size={{ xs: 12, sm: 4 }} key={metrica.id}>
              <Card elevation={2} sx={{ borderLeft: `6px solid ${metrica.color}` }}>
                <CardContent>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {metrica.titulo}
                  </Typography>
                  <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: metrica.color }}>
                    {metrica.valor}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;