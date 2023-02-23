import React from 'react';
import { Box, Input, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SearchBox = ({ onChange, placeholder }) => {
  let boxBorder = useColorModeValue('gray.50', 'primary400');

  return (
    <Box>
      <Input
        type='search'
        onChange={onChange}
        placeholder={placeholder}
        size='lg'
        width='auto'
        _placeholder={{ opacity: 1, color: 'primary400' }}
        border='2px solid'
        variant='solid'
        borderColor={boxBorder}
      />
    </Box>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default SearchBox;
