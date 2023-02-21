import { Box, ChakraProvider, Grid, Heading, theme, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ColorModeSwitcher from './components/ColorModeSwitcher/ColorModeSwitcher';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onChangeHandler = (event) => {
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
