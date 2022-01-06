import React from "react";

const Ficha = (props) => {
    return(
        <div>
            <div>
                <img src={props.src} width="150px" height="150px"/>
            </div>
            <div>
                <label>{props.country}</label>
                <br/>
                <label>{props.where}</label>
                <br/>
                <label>{props.age}</label>
            </div>
        </div>
    )
}

export default Ficha;