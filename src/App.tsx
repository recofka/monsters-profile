import { Box, ChakraProvider, Grid, Heading, VStack } from '@chakra-ui/react';
import theme from './theme/theme';
import { useEffect, useState, ChangeEvent } from 'react';
import { getData } from './utils/data.utils';
import ColorModeSwitcher from './components/ColorModeSwitcher/ColorModeSwitcher';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldInput = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldInput);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center'>
        <Grid minH='100vh' p={3}>
          <ColorModeSwitcher justifySelf='flex-end' />
          <VStack spacing={8}>
            <Heading as='h1' className='page-title' fontSize='xl'>
              Monsters Profile
            </Heading>
            <SearchBox onChange={onChangeHandler} placeholder='search for a monster' />
            <CardList monstersList={filteredMonsters} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
