import React from 'react';
import { Link } from 'react-router-dom';
class Dropdown extends React.Component {
  
  displayDropdownItems = () => {
    return this.props.dropdownData.map((item, index) => {
      if (item.link)
        return (
          <>
            <Link
              onClick={item.handlerClick}
              className='nav-link'
              to={item.link}
              style={{ margin: 0, padding: 0 }}
            >
              <div
                className='h1Lc'
                style={{ width: '100%' }}
                onClick={item.onClick}
                key={index}
              >
                <img alt='' src={item.logo} />
                <label>{item.label}</label>
                {index === 1 || index === 2 ? <span>2</span> : null}
              </div>
            </Link>
            {index === 2 || index === 4 ? (
              <div
                style={{
                  width: '100%',
                  borderBottom: '1px dashed #BDBDBD',
                  height: '1px',
                  margin: '0px',
                  padding: '0px',
                }}
              ></div>
            ) : null}
          </>
        );
      else
        return (
          <>
            <div
              className='h1Lc'
              style={{ width: '100%' }}
              onClick={item.onClick}
              key={index}
            >
              <img alt='' src={item.logo} />
              <label>{item.label}</label>
            </div>
            {index === 1 ? (
              <div
                style={{
                  width: '100%',
                  borderBottom: '1px dashed #BDBDBD',
                  height: '1px',
                  margin: '0px',
                  padding: '0px',
                }}
              ></div>
            ) : null}
          </>
        );
    });
  };
  render() {
    return <div className='mDdC'>{this.displayDropdownItems()}</div>;
  }
}
export default Dropdown;
