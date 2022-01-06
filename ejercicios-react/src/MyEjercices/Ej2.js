import React from "react";
import Ficha from "./components/ficha.js";
import { places } from "./constants/places.js";

const Ej2 = () => {
    return(
        <div>
            <h1>Places younger than 50.</h1>
            <div>
                {places.Filter(place => place.age<50).map(place =>
                (<Ficha 
                src={place.src} 
                country={country.place}
                where={where.place}
                age={age.place}/>))}
            </div>
        </div>
    )
}

export default Ej2;