import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import MapArea from '../mapArea/MapArea';
import { connect } from 'react-redux';

const Home = ({ search: { closeSidebar } }) => {
  return (
    <div className='homepage'>
      {!closeSidebar && <Sidebar />}
      <MapArea />
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps)(Home);
