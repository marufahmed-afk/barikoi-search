import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { connect } from 'react-redux';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 23.71881383699252,
  lng: 90.38824439048767,
};

const MapArea = ({ search: { currentLocation, nearbyLocation } }) => {
  currentLocation && console.log(currentLocation);

  return (
    (currentLocation && (
      <div className='map-area'>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{
              lat: parseFloat(currentLocation.latitude),
              lng: parseFloat(currentLocation.longitude),
            }}
            zoom={14}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <>
              <Marker
                position={{
                  lat: parseFloat(currentLocation.latitude),
                  lng: parseFloat(currentLocation.longitude),
                }}
              />

              {nearbyLocation &&
                nearbyLocation.map((item) => (
                  <Marker
                    position={{
                      lat: parseFloat(item.latitude),
                      lng: parseFloat(item.longitude),
                    }}
                  />
                ))}
            </>
          </GoogleMap>
        </LoadScript>
      </div>
    )) || (
      <div className='map-area'>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          ></GoogleMap>
        </LoadScript>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps)(MapArea);
