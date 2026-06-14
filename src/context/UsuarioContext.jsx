import { createContext, useState } from "react";
export const UsuarioContext = createContext();
export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    return {
      nombre: "Juan Perez",
      dni: "26167892",
      rol: "Docente",
      institucion: "Universidad Nacional de Jujuy",
    };
  });

  const actualizarPerfil = (datosActualizados) => {
    setUsuario(datosActualizados);
  }

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};
