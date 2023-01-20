import React from 'react'
import { Link } from 'react-router-dom'
class Card1 extends React.Component{
    render(){
        const {source,heading,customStyle, link}=this.props
        return(
             <div className='card1Container' style={customStyle?customStyle:null}>
                <Link to={link}><img className='imageContainer' src={source}></img>
                  <div className='overlay'>
                        <div className='c1Content'>
                            {heading}
                        </div>
                    </div>
                    {/* style={{backgroundImage:`url(${(source)})`}} */}
                </Link>  
              </div>
            
        )
    }
}
export default Card1