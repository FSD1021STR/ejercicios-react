import React from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

//Muestras todas las personas usando el componente card


const Ejercicio1 = () => {
  const persona = personas[0]
  const persona1 = personas[1]
  const persona2 = personas[2]
  const persona3 = personas[3]
  const persona4 = personas[4]
  const persona5 = personas[5]
  const persona6 = personas[6]
  const persona7 = personas[7]
  return (
    <div className="espace">
      <h1> Personas </h1>
      <div className="card">
        <Card src={persona.src} name={persona.name} 
        surname={persona.surname} age={persona.age}/>

        <Card src={persona1.src} name={persona1.name} 
        surname={persona1.surname} age={persona1.age}/>

        <Card src={persona2.src} name={persona2.name} 
        surname={persona2.surname} age={persona2.age}/>

        <Card src={persona3.src} name={persona3.name} 
        surname={persona3.surname} age={persona3.age}/>

        <Card src={persona4.src} name={persona4.name} 
        surname={persona4.surname} age={persona4.age}/>

        <Card src={persona5.src} name={persona5.name} 
        surname={persona5.surname} age={persona5.age}/>

        <Card src={persona6.src} name={persona6.name} 
        surname={persona6.surname} age={persona6.age}/>

        <Card src={persona7.src} name={persona7.name} 
        surname={persona7.surname} age={persona7.age}/>
        {/*Map de las cards con la info de cada persona*/}
      </div>
    </div>
  );
};
export default Ejercicio1;
