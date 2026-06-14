import React from "react";
import {UsuarioContext} from "../context/UsuarioContext";
import {useContext} from "react";

const Header = () => {

    const { usuario } = useContext(UsuarioContext);
    return (
        <header>
            <h1>Gestor de Proyectos Educativos</h1>
            <p>{usuario.nombre}</p>
        </header>
    );
}

export default Header;