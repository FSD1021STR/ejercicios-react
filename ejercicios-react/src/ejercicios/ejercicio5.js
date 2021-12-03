import React, { useState } from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

const Ejercicio5 = () => {
  const [name, setName] = useState();
  const personasCards = personas.map((persona) => (
    <Card
      src={persona.src}
      name={persona.name}
      surname={persona.surname}
      age={persona.age}
    />
  ));
  const [results, setResults] = useState(personasCards);

  const handleSearch = () => {
    const encontrado = personas.find((persona) => persona.name === name);

    setResults(
      <Card
        src={encontrado.src}
        name={encontrado.name}
        surname={encontrado.surname}
        age={encontrado.age}
      />
    );
  };

  return (
    <div className="espace">
      <h1> Busca a tu personaje favorito: </h1>
      <label>Introduce el nombre: </label>
      <input onChange={(evento) => setName(evento.target.value)} />
      <button onClick={() => handleSearch()}> Busca! </button>
      <div className="card">{results}</div>
    </div>
  );
};
export default Ejercicio5;
