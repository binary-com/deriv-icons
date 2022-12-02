import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DrawingsRectangleIcon } from '../src/react/Trading/Drawings';

const DrawingsRectangleIconStory: ComponentMeta<typeof DrawingsRectangleIcon> = {
  title: 'trading /DrawingsRectangleIcon',
  component: DrawingsRectangleIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof DrawingsRectangleIcon> = (args) => (
  <DrawingsRectangleIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default DrawingsRectangleIconStory;
