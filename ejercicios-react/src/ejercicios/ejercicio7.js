import React, { useState } from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

const Ejercicio7 = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [image, setImage] = useState("");

  const personasCards = personas.map((persona) => (
    <Card
      src={persona.src}
      name={persona.name}
      surname={persona.surname}
      age={persona.age}
    />
  ));

  const [results, setResults] = useState(personasCards);

  const handleSubmit = (event) => {
    event.preventDefault();
    personasCards.push(
      <Card src={image} name={name} surname={surname} age={age} />
    );
    setResults(personasCards);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Introduce tu nombre y apellidos </h2>
        <label>Nombre: </label>
        <input onChange={(evento) => setName(evento.target.value)} />
        <br />
        <label>Apellido: </label>
        <input onChange={(evento) => setSurname(evento.target.value)} />
        <br />
        <label>Edad: </label>
        <input onChange={(evento) => setAge(evento.target.value)} />
        <br />
        <label>Imagen (debe ser una url): </label>
        <input onChange={(evento) => setImage(evento.target.value)} />
        <br />
        <button type="submit"> Submit!</button>
      </form>
      <div className="card">{results}</div>
    </div>
  );
};
export default Ejercicio7;
