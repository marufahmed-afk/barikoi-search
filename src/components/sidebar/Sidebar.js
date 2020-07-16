import React, { useState } from 'react';
import { connect } from 'react-redux';

import SidebarDetails from './SidebarDetails';
import AutoSuggest from './AutoSuggest';
import { getSuggestions, toggleSidebar, clearAll } from '../../actions/search';
import Nearby from './Nearby';

const Sidebar = ({
  search: { searching, closeSidebar },
  getSuggestions,
  toggleSidebar,
  clearAll,
}) => {
  const handleChange = (e) => {
    getSuggestions(e.target.value);
  };

  const handleClick = (e) => {
    toggleSidebar();
  };
  return (
    !closeSidebar && (
      <section className='sidebar container'>
        <h1 className='title-text'>
          Bari<span>koi</span>
        </h1>
        <img
          src={require('../../assets/back.svg')}
          className='icon back-arrow'
          onClick={handleClick}
          alt=''
        />
        <form id='myForm' className='search-bar'>
          <input type='text' onChange={handleChange} />
          {searching && (
            <img
              src={require('../../assets/cross.svg')}
              className='icon'
              onClick={() => clearAll()}
              alt=''
            />
          )}
        </form>
        {searching ? <AutoSuggest /> : <SidebarDetails />}
        <Nearby />
      </section>
    )
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, {
  getSuggestions,
  toggleSidebar,
  clearAll,
})(Sidebar);
