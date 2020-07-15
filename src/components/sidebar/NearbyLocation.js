import React from 'react';

const NearbyLocation = ({ item }) => {
  return (
    <li>
      <div className='nearby-item'>
        <p>{item.Address}</p>
      </div>
    </li>
  );
};

export default NearbyLocation;
