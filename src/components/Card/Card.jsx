import React from 'react';
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
// import './Card.css';

const CardUI = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <Card maxW='sm' mt='3' bg='tomato'>
      <CardBody>
        <Image
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
          alt={`monster ${name}`}
          objectFit='cover'
          boxSize='100%'
        />
        <Stack mt='6' spacing='3'>
          <Heading as='h2' size='md'>
            {name}
          </Heading>
          <Text>{email}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

CardUI.prototype = {};

export default CardUI;
