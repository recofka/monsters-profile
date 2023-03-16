import React, { ChangeEvent } from 'react';
import { Box, Input, useColorModeValue } from '@chakra-ui/react';

type SearchBoxProps = {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, onChange }: SearchBoxProps) => {
  const boxBorder = useColorModeValue('gray.50', 'primary400');

  return (
    <Box>
      <Input
        type='search'
        onChange={onChange}
        placeholder={placeholder}
        size='lg'
        width='auto'
        _placeholder={{ color: 'primary400', opacity: 1 }}
        border='2px solid'
        variant='solid'
        borderColor={boxBorder}
      />
    </Box>
  );
};

export default SearchBox;
