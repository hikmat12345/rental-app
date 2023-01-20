import React from "react";

import "./iconCards.css"

const IconCard = props => {
    return(
        <div className="iconCardContainer">
            <img src={props.icon} alt=""/>
            <h3 className="hMargin fz-20">{props.title}</h3>
            <p className="lightGrey lh26">{props.desc}</p>
        </div>       
    )
}

export default IconCard