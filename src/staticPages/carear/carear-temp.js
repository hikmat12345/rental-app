import React from 'react'
import "./carear.css"
import clip from "./file-clip.png";
function Carear_temp(props) {
    return (
        <div className="carear-container">
            <div className="carear-col col-padding-right">
                <div className="carear-yellow-text">
                   {props.yellowText}             
                </div>
                <div className="carear-green-text">
                   {props.greenText}  
                </div>
                <div className="carear-purple-text">  
                   {props.purpleText}  
                </div>
                <div className="carear-paragraph-text">  
                    {props.paragraphText}  
                </div>
            </div>
            <div className="carear-col col-padding-left">
                <img src={props.carearImg} alt="img" />
            </div>
        </div>
    )
}
function Carear_Form(props) {
    return (
        <div className="carear-form-container"> 
            <div className="input-form-box">
              <div className="form-title">
               {props.title} 
              </div>
              <textarea placeholder="Keep it short and sweet!">
                {props.textarea} 
             </textarea>
             <div className="d-flex">
              <img src={clip} class="clip-file"/>
               <label for="files" class="carear-file">Attach Resume Here</label>
               <input id="files" style={{visibility:"hidden"}} type="file"/>
               <button className="career-form-apply-btn">Apply</button>
             </div>
           </div>
        </div>
        )}

export  {Carear_Form, Carear_temp}

