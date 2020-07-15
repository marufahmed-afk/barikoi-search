import React from 'react';
import { connect } from 'react-redux';
import NearbyLocation from './NearbyLocation';

const Nearby = ({ search: { nearbyLocation } }) => {
  console.log(nearbyLocation);
  return (
    <div className='nearby-box'>
      <ul>
        {nearbyLocation &&
          nearbyLocation.map((item) => (
            <NearbyLocation key={item.id} item={item} />
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps)(Nearby);
