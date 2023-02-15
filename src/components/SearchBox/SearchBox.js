import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ onChange, placeholder }) => {
    return <input type='search' onChange={onChange} placeholder={placeholder} />;
};

SearchBox.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default SearchBox;
