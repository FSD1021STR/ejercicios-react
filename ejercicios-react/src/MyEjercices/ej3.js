import React, { useState } from "react";
import { Cars } from "../MyComponents/carsArray";
import { MyCard } from "../MyComponents/MyCard";

export const Ej3 = () => {
    const [yyear, setYyear] = useState ("")
    return(
        <div>
            <h1>Inputs and Filters!</h1>
            <h2>Brand nw cars or Old fasioned? {yyear}</h2>
            <div>
                <label>Give me a year: </label>
               <input type="number" onChange={event => setYyear(event.target.value)}/> 
            </div>
            <div>
                {Cars
                .filter(car => car.year > yyear)
                .map(car => <MyCard
                carName={car.carName}
                power={car.power}
                year={car.year}
                img={car.img}/>)
                }
            </div>
        </div>
    )
}