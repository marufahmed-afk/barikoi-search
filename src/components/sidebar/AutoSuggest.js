import React from 'react';
import { connect } from 'react-redux';
import { getCurrent } from '../../actions/search';
import AutoSuggestItem from './AutoSuggestItem';

const AutoSuggest = ({ search: { suggestions }, getCurrent }) => {
  return (
    <div className='auto-suggest'>
      <ul>
        {suggestions &&
          suggestions.map((item) => (
            <AutoSuggestItem key={item.id} item={item} />
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { getCurrent })(AutoSuggest);
