import ColorModeSwitcher from './ColorModeSwitcher';

export default {
  title: 'Components/ColorModeSwitcher',
  component: ColorModeSwitcher,
  args: {}
};

const Template = (args) => <ColorModeSwitcher {...args} />;

export const ColorModeSwitcherDisplay = Template.bind({});
