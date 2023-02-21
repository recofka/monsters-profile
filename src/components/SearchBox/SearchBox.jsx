import React from 'react';
import { Box, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import './SearchBox.css';

const SearchBox = ({ onChange, placeholder }) => {
  return (
    <Box>
      <Input
        type='search'
        onChange={onChange}
        placeholder={placeholder}
        size='lg'
        width='auto'
        _placeholder={{ opacity: 1, color: 'gray.500' }}
        variant='outline'
      />
    </Box>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default SearchBox;
