import React, {useState} from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

const Ejercicio3 = () => {
  const [age, setAge] = useState();
  return (
    <div className="espace">
      <h1> Personas mayores de: {age} </h1>
      <label>Elije edad: </label>
      <input type="number" onChange={(evento) => setAge(evento.target.value)} />
      <div className="card">
        {personas
          .filter((persona) => persona.age > age)
          .map((persona) => (
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
export default Ejercicio3;
