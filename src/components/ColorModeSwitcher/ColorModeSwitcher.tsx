import React from 'react';
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size='md'
      fontSize='lg'
      aria-label={`Switch to ${text} mode`}
      variant='ghost'
      color='current'
      marginLeft='2'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
