import React from "react";

import "./imageCards.css"

const ImageCard = props => {
    return(
        <div className="imageCardsContainer">
            <img className="rds20 img100" src={props.image} alt=""/>
            <h3 className="hMargin">{props.title}</h3>
            <p className="lightGrey lh26 fz-18">{props.desc}</p>
        </div>       
    )
}

export default ImageCard