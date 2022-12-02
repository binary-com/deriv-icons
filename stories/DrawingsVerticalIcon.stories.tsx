import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DrawingsVerticalIcon } from '../src/react/Trading/Drawings';

const DrawingsVerticalIconStory: ComponentMeta<typeof DrawingsVerticalIcon> = {
  title: 'trading /DrawingsVerticalIcon',
  component: DrawingsVerticalIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof DrawingsVerticalIcon> = (args) => (
  <DrawingsVerticalIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default DrawingsVerticalIconStory;
