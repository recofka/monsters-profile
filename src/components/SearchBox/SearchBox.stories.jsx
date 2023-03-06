import React from 'react';
import SearchBox from './SearchBox';

export default {
  title: 'Components/SeachBox',
  component: SearchBox,
  args: {
    type: 'search',
    placeholder: 'search for a monster'
  }
};

const Template = (args) => <SearchBox {...args} />;

export const Search = Template.bind({});
