import React from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

//Muestras todas las personas usando el componente card


const Ejercicio1 = () => {
  return (
    <div className="espace">
      <h1> Personas </h1>
      <div className="card">
        {/*Map de las cards con la info de cada persona*/}
      </div>
    </div>
  );
};
export default Ejercicio1;
