import React from 'react'
class Skeleton extends React.Component{
    render(){
        const {heading, content, source}=this.props
        return(
            <div className='skelContainer'>
                <img src={source}/>
                <h3>{heading}</h3>
                <div className='contentC'>{content}</div>
            </div>
        )
    }
}
export default Skeleton