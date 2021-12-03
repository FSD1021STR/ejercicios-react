import React, {useState} from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

//Añade un input para poder elegir porque edad filtramos

const Ejercicio3 = () => {
    // necesitaremos algo para guardar la edad elegida no? ;)
    return (
    <div className="espace">
      <h1> Personas mayores de: {age} </h1>
      <label>Elije edad: </label>
      {/* input */}
      <div className="card">
        {/* filtrar, recuerda añadir la edad elegida en la condicion */}
      </div>
    </div>
  );
};
export default Ejercicio3;
