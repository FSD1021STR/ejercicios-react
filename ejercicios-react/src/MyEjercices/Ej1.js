import React from "react";
 import Ficha from "./components/ficha";
 import { places } from "./constants/places";

const Ej1 = () => {
    return(
        <div>
            <h1>World Places</h1>
            <div>
                {places.map((place) => (<Ficha 
                src={place.src} 
                country={place.country} 
                where={place.where} 
                age={place.age}/>))}
            </div>
        </div>
    )
}

export default Ej1;