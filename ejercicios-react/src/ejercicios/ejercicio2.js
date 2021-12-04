import React from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";


// Filtras todas las card de personas mayores de 50

const Ejercicio2 = () => {
  return (
    <div className="espace">
      <h1> Personas mayores de 50 </h1>
      <div className="card">
        {personas.filter((persona) => persona.age > 50) .map ((persona) => (<Card src={persona.src} name={persona.name} surname={persona.surname} age={persona.age}/>))
      </div>
    </div>
  );
};
export default Ejercicio2;
