import React from 'react';
import CardProfile from './CardProfile';

export default {
  title: 'Components/Card',
  component: CardProfile,
  args: {
    key: 10,
    monster: {
      email: 'clementina.dubuque@monster.com',
      id: '10',
      name: 'Clementina DuBuque'
    }
  }
};

const Template = (args) => <CardProfile {...args} />;

export const CardDisplay = Template.bind({});
