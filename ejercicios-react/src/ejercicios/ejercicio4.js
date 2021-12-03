import React, { useState } from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

// Añade un boton para que al pulsarlo se realice la accion de filtrar

const Ejercicio4 = () => {
  const [age, setAge] = useState();
  //Muestra todas las personas al inicio
  const personasCards = personas.map((persona) => (
    <Card
      src={persona.src}
      name={persona.name}
      surname={persona.surname}
      age={persona.age}
    />
  ));
  const [results, setResults] = useState(personasCards);

  const handleFilter = () => {
   //Como añadirias el resultado del filtro a la funcion setResult?
  };

  return (
    <div className="espace">
      <h1> Personas mayores de: {age} </h1>
      <label>Elije edad: </label>
      <input type="number" onChange={(evento) => setAge(evento.target.value)} />
      {/*Boton que al pulsarlo accione la funcion handleFilter*/}
      <div className="card">{results}</div>
    </div>
  );
};
export default Ejercicio4;
