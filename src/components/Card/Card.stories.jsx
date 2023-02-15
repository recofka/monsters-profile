import React from 'react';
import Card from '../Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    key: 10,
    monster: {
      email: 'clementina.dubuque@monster.com',
      id: '10',
      name: 'Clementina DuBuque'
    }
  }
};

const Template = (args) => <Card {...args} />;

export const CardDisplay = Template.bind({});
