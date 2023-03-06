import React, { useState } from 'react';
import { Flex, Image, Text, useColorModeValue, Stack, Button } from '@chakra-ui/react';

const CardProfile = ({ monster }) => {
  const { id, name, email } = monster;
  const [isHovering, setHovering] = useState('');
  let cardBg = useColorModeValue('lightcyan', 'primary300');
  let cardBorder = useColorModeValue('gray.800', 'primary400');
  let contrastColor = useColorModeValue('lightviolet', 'primary100');
  let mainText = useColorModeValue('gray.800', 'primary800');
  let secondaryText = useColorModeValue('gray.800', 'primary600');

  const handleMouseEnter = () => {
    setHovering(true);
  };
  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <Flex
      style={{
        position: 'relative',
        top: isHovering ? '-10px' : '0px',
        transition: 'top ease 0.5s'
      }}
      borderRadius='20px'
      bg={cardBg}
      border='3px solid'
      p='20px'
      borderColor={cardBorder}
      h='330px'
      w={{ base: '350px', md: '300px' }}
      alignItems='center'
      direction='column'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Flex flexDirection='column' mb='10px' minWidth='md'>
        <Image
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
          border='5px solid'
          mx='auto'
          borderColor={contrastColor}
          width='150px'
          height='150px'
          borderRadius='50%'
        />
        <Text fontWeight='600' color={mainText} textAlign='center' fontSize='xl'>
          {name}
        </Text>
        <Text color={secondaryText} textAlign='center' fontSize='sm' fontWeight='500'>
          {email}
        </Text>
      </Flex>

      <Stack mt={8} direction={'row'} spacing={4}>
        <Button
          variant={'solid'}
          flex={1}
          fontSize={'sm'}
          _hover={{
            bg: 'primary600'
          }}
          _focus={{
            bg: 'primary500'
          }}
        >
          Message
        </Button>
        <Button
          variant={'solid'}
          flex={1}
          fontSize={'sm'}
          bg={contrastColor}
          color={'white'}
          _hover={{
            bg: 'primary500'
          }}
          _focus={{
            bg: 'primary500'
          }}
        >
          Follow
        </Button>
      </Stack>
    </Flex>
  );
};

CardProfile.propTypes = {};

export default CardProfile;
