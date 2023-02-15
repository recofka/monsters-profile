import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

const SearchBox = ({ onChange, placeholder }) => {
  return (
    <input className='search-box' type='search' onChange={onChange} placeholder={placeholder} />
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default SearchBox;
