import React from 'react'
import rope1 from '../../../images/sidebar/rope1.png'
import rope2 from '../../../images/sidebar/rope2.png'
class NavigationBlock extends React.Component{
    displayItems=()=>{
        return this.props.itemsArray ? this.props.itemsArray.map((element,index)=>{
            return(
                <div className='itemsW1 f-jFlexStart-aCenter-fRow'>
                    <div key={index} className='itemsW boldFont'>
                        <img src={element.icon}/>
                        {element.title}
                    </div>
                </div>
            )
        }):[]
    }
    render(){
        const {header}=this.props
        return(
            <div className='sideBarNBlockContainer'>
                <div className='header f-jSpaceBetween-aCenter-fRow'>
                    <img src={rope1}/>
                    <h4>{header}</h4>
                    <img src={rope2}/>
                </div>
                <div className='items'>
                    {this.displayItems()}
                </div>
            </div>
        )
    }
}
export default NavigationBlock