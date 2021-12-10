import React from "react";
import Card from "../componentes/card";
import { personas } from "../constantes";
import "./ejercicio1.css";

//Muestras todas las personas usando el componente card


const Ejercicio1 = () => {
  return (
    <div className="espace">
      <h1> Personas </h1>
      <div className="card">
        <Card src={personas[0].src} name={personas[0].name} 
        surname={personas[0].surname} age={personas[0].age}/>

        <Card src={personas[1].src} name={personas[1].name} 
        surname={personas[1].surname} age={personas[1].age}/>

        <Card src={personas[2].src} name={personas[2].name} 
        surname={personas[2].surname} age={personas[2].age}/>

        <Card src={personas[3].src} name={personas[3].name} 
        surname={personas[3].surname} age={personas[3].age}/>

        <Card src={personas[4].src} name={personas[4].name} 
        surname={personas[4].surname} age={personas[4].age}/>

        <Card src={personas[5].src} name={personas[5].name} 
        surname={personas[5].surname} age={personas[5].age}/>

        <Card src={personas[6].src} name={personas[6].name} 
        surname={personas[6].surname} age={personas[6].age}/>

        <Card src={personas[7].src} name={personas[7].name} 
        surname={personas[7].surname} age={personas[7].age}/>
        {/*Map de las cards con la info de cada persona*/}
      </div>
    </div>
  );
};
export default Ejercicio1;
