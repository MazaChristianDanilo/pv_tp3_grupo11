import Alert from "@mui/material/Alert";

const RegistroActividad = ({ fecha }) => {
  return (
    <Alert severity="info" sx={{ mb: 2 }}>
      Última actualización de la lista: {fecha} hs.
    </Alert>
  );
};

export default RegistroActividad;