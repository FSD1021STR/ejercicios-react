import React, { useState } from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

const Ejercicio6 = () => {
  const [name, setName] = useState();
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

  const handleMap = () => {
    const map = personas.map((persona) => (
      <Card
        src={persona.src}
        name={persona.name}
        surname={persona.surname}
        age={persona.age}
      />
    ));

    setResults(map);
  }

  return (
    <div className="espace">
      <h1> Juega con las personas:  </h1>
      <label>Introduce el nombre: </label>
      <input onChange={(evento) => setName(evento.target.value)} />
      <button onClick={() => handleSearch()}> Busca! </button>
      <br />
      <label>Elije edad: </label>
      <input type="number" onChange={(evento) => setAge(evento.target.value)} />
      <button onClick={() => handleFilter()}> Busca! </button>
      <br />
      <label>Muestralas a todas </label>
      <button onClick={() => handleMap()}> Muestra! </button>
      <br />
      <div className="card">{results}</div>
    </div>
  );
};
export default Ejercicio6;
