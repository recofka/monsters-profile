import React, { useEffect, useState } from 'react';
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
    <div>
      <h1 className='page-title'>Monsters Profile</h1>
      <SearchBox onChange={onChangeHandler} placeholder='search for a monster here' />

      <CardList monstersList={filteredMonsters} />
    </div>
  );
};

export default App;
