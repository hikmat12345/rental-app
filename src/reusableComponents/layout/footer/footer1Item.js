import React from 'react';
import { Link } from 'react-router-dom';
class Footer1Item extends React.Component {
  render() {
    const { heading, items } = this.props;
    return (
      <div className='footer1ItemsC .f-jStart-aCenter-fColumn'>
        <h3>{heading}</h3>
        {items.map((element, index) => {
          return (
            <div>
              <div className='itemContainer' key={index}>
                <Link to={element.link}>
                  <span>{element.title}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Footer1Item;
