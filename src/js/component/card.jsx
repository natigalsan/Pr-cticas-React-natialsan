import React from "react";

function Card (props) {

    return (
        
            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src={props.src} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        
    )
}






export default Card;