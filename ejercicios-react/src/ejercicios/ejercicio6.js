import React, { useState } from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

//Une los 3 ejercicios anteriores
//Pon el filtrado por edad
//La busqueda por nombre
//Y un boton que muestre todas las opciones

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
    /*buscar*/
  };

  const handleFilter = () => {
    //filtrar por edad
  };

  const handleMap = () => {
    //Mostrar todos los resultados
  }

  return (
    <div className="espace">
      <h1> Juega con las personas:  </h1>
      <label>Introduce el nombre: </label>
      <input onChange={(evento) => setName(evento.target.value)} />
      <button onClick={() => handleSearch()}> Busca! </button>
      <br />
      {/* Introduce edad*/}
      <br />
      {/*Añade boton para mostrarlas todas*/}
      <br />
      <div className="card">{results}</div>
    </div>
  );
};
export default Ejercicio6;
