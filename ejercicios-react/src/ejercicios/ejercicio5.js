import React, { useState } from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

// Esta vez queremos buscar una persona, añade un input para el texto y el boton que active la acción

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
    //Busca por nombre en array de personas, usa setResults para que muestre el resultado
    // recuerda que el metodo para buscar devuelve una sola opción
  };

  return (
    <div className="espace">
      <h1> Busca a tu personaje favorito: </h1>
      <label>Introduce el nombre: </label>
      {/*input para la busqueda*/}
      {/*boton para realizar la busqueda*/}
      <div className="card">{results}</div>
    </div>
  );
};
export default Ejercicio5;
