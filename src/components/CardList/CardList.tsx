import { ReactElement } from 'react';
import CardProfile from '../CardProfile/CardProfile';
import { Monster } from '../../App';
import { Box, Grid } from '@chakra-ui/react';

type CardListProps = {
  monstersList: Monster[];
}

const CardList = ({ monstersList }: CardListProps): ReactElement => {
  return (
    <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
      {monstersList.map((monster) => {
        return (
          <Box key={monster.id}>
            <CardProfile monster={monster} />
          </Box>
        );
      })}
    </Grid>
  );
};

export default CardList;
