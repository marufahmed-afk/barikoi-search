import React from 'react';
import { connect } from 'react-redux';
import { getNearby } from '../../actions/search';

const SidebarDetails = ({
  search: { currentLocation, nearbyLocation },
  getNearby,
}) => {
  let address = currentLocation && currentLocation.address.split(',');

  const handleClick = (e) => {
    let pType = e.target.innerText.toLowerCase();
    getNearby(currentLocation.longitude, currentLocation.latitude, pType);
  };

  return (
    currentLocation && (
      <div className='sidebar-flex'>
        <div className='details'>
          <h1 className='sp-1'>{address[0]}</h1>
          <h4 className='sp-1'>
            {address.slice(1, address.length) + ', ' + currentLocation.area}
          </h4>
          <p className='sp-1'>{currentLocation.pType}</p>
          <p className='sp-1 faded'>Place Code: {currentLocation.ucode}</p>
        </div>

        <div className='tags'>
          <a className='btn' onClick={handleClick}>
            Food
          </a>
          <a className='btn' onClick={handleClick}>
            Bank
          </a>
          <a className='btn' onClick={handleClick}>
            Healthcare
          </a>
          <a className='btn' onClick={handleClick}>
            Education
          </a>
          <a className='btn' onClick={handleClick}>
            Hotel
          </a>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { getNearby })(SidebarDetails);
