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
        {personas.map((persona) => (
          <Card
            src={persona.src}
            name={persona.name}
            surname={persona.surname}
            age={persona.age}
          />
        ))}
      </div>
    </div>
  );
};
export default Ejercicio1;
