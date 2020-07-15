import React, { useState } from 'react';
import { connect } from 'react-redux';

import SidebarDetails from './SidebarDetails';
import AutoSuggest from './AutoSuggest';
import { getSuggestions } from '../../actions/search';
import Nearby from './Nearby';

const Sidebar = ({ search: { searching }, getSuggestions }) => {
  const handleChange = (e) => {
    getSuggestions(e.target.value);
  };
  return (
    <section className='sidebar container'>
      <h1 className='title-text'>
        Bari<span>koi</span>
      </h1>
      <form id='myForm' className='search-bar'>
        <input type='text' onChange={handleChange} />
        <img src={require('../../assets/cross.svg')} className='icon' alt='' />
      </form>
      {searching ? <AutoSuggest /> : <SidebarDetails />}
      <Nearby />
    </section>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { getSuggestions })(Sidebar);
