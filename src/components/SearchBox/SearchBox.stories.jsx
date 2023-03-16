import SearchBox from './SearchBox';

export default {
  title: 'Components/SeachBox',
  component: SearchBox,
  args: {
    placeholder: 'search for a monster',
    type: 'search'
  }
};

const Template = (args) => <SearchBox {...args} />;

export const Search = Template.bind({});
