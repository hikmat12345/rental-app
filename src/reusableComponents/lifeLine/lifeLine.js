import React from "react";
import { lifeLineRules } from "../../data.json";

import "./lifeLine.css"

const LifeLine = props => {
    return(
        <div className="lifeLineContainer">
            <h3 className="hMargin fz-36">Lifeline</h3>
            <ul id="lifeRules" className="rdsShadow">
                {
                    lifeLineRules.map((rule, index) => {
                        return(
                            <li className="lRule fz-18" key={`faq-${index}`}>{rule}</li>
                        )
                    })
                }
            </ul>
        </div>       
    )
}

export default LifeLine