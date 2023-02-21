import React from 'react';
import CardUI from '../Card/Card';
import { Box, Grid } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CardList = ({ monstersList }) => {
  return (
    <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
      {monstersList.map((monster) => {
        return (
          <Box key={monster.id}>
            <CardUI monster={monster} />
          </Box>
        );
      })}
    </Grid>
  );
};

CardList.prototype = {
  monstersList: PropTypes.object
};

export default CardList;
