import React from 'react';
import { connect } from 'react-redux';
import { getCurrent } from '../../actions/search';

const AutoSuggestItem = ({ item, getCurrent }) => {
  let currentPlace = '';

  currentPlace = item.address.split(',');

  const handleClick = (e) => {
    getCurrent(item.id);
  };

  return (
    <li onClick={handleClick}>
      <img src={require('../../assets/location.svg')} className='icon' alt='' />
      <div className='suggest-info'>
        <h4>{currentPlace[0]}</h4>
        <p>{currentPlace.slice(1, currentPlace.length) + ', ' + item.area}</p>
        <p>{item.city}</p>
      </div>
    </li>
  );
};

export default connect(null, { getCurrent })(AutoSuggestItem);
