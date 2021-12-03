import React, { useState } from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

//Crea un formulario que añada una persona mas al array de personas

const Ejercicio7 = () => {
  const [name, setName] = useState("");
    // Añade las variables (useState) que sean necesarias 

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
    //Que metodo añadia un nuevo elemento a un array
    /*personasCards. ??? (
      <Card src={image} name={name} surname={surname} age={age} />
    );*/
    setResults(personasCards);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Introduce tu nombre y apellidos </h2>
        <label>Nombre: </label>
        <input onChange={(evento) => setName(evento.target.value)} />
        <br />
        {/*Apellido */}
        <br />
        {/*Edad*/}
        <br />
        <label>Imagen (debe ser una url): </label>
        {/*Input para recoger la URL de la imagen*/}
        <br />
        {/*Boton Submit*/}
      </form>
      <div className="card">{results}</div>
    </div>
  );
};
export default Ejercicio7;
