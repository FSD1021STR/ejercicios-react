import React, { useState } from "react";
import { MyCard } from "../MyComponents/MyCard";
import { Cars } from "../MyComponents/carsArray";

export const Test3 = () => {

    const [year, setYear] = useState ("")
    return(
        <div>
            <div>
                <h1>Test ej3 MyCard and Cars</h1>
                <h2>Give a year! {year}</h2>
                <label>Year</label>
                <input type="number" onChange={event => setYear(event.targetvalue)}/>
            </div>
            <div>
                {Cars
                .filter(car => car.year > year)
                .map(car => <MyCard
                carName={car.carName}
                power={car.power}
                year={car.year}
                img={car.img}/>)}
            </div>

        </div>
    )
}