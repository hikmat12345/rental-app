import React from 'react'
import { Link } from 'react-router-dom'
class Card extends React.Component{
    render(){
        const {source,heading,content,customStyle, link}=this.props
        return(
            <div className='cardContainer'>
                <Link to={link}><img src={source}/>
                  <div className='cardContentContainer'>
                     <h2>{heading}</h2>
                     <div>{content}</div>
                   </div>
                </Link>
            </div>
        )
    }
}
export default Card