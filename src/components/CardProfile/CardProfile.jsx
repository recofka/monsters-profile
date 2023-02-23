import React from 'react';
import { Flex, Image, Text, useColorModeValue, Stack, Button } from '@chakra-ui/react';

const CardProfile = ({ monster }) => {
  const { id, name, email } = monster;

  let boxBg = useColorModeValue('#ADC5CF !important', '#2989A6 !important');
  let imageBorder = useColorModeValue('#845EC2 !important', '#F3C5FF !important');

  let mainText = useColorModeValue('gray.800', 'white');
  let secondaryText = useColorModeValue('gray.800', 'gray.400');

  return (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      h='330px'
      w={{ base: '350px', md: '300px' }}
      alignItems='center'
      direction='column'
    >
      <Flex flexDirection='column' mb='10px'>
        <Image
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
          border='5px solid red'
          mx='auto'
          borderColor={imageBorder}
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
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          _focus={{
            bg: 'gray.200'
          }}
        >
          Message
        </Button>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'blue.500'
          }}
          _focus={{
            bg: 'blue.500'
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
