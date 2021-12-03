import React, { useState } from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

const Ejercicio4 = () => {
  const [age, setAge] = useState();
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
    const filtrado = personas
      .filter((persona) => persona.age > age)
      .map((persona) => (
        <Card
          src={persona.src}
          name={persona.name}
          surname={persona.surname}
          age={persona.age}
        />
      ));

    setResults(filtrado);
  };
  return (
    <div className="espace">
      <h1> Personas mayores de: {age} </h1>
      <label>Elije edad: </label>
      <input type="number" onChange={(evento) => setAge(evento.target.value)} />
      <button onClick={() => handleFilter()}> Busca! </button>
      <div className="card">{results}</div>
    </div>
  );
};
export default Ejercicio4;
