import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import MapArea from '../mapArea/MapArea';

const Home = () => {
  return (
    <div className='homepage'>
      <Sidebar />
      <MapArea />
    </div>
  );
};

export default Home;
