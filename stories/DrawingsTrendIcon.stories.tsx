import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DrawingsTrendIcon } from '../src/react/Trading/Drawings';

const DrawingsTrendIconStory: ComponentMeta<typeof DrawingsTrendIcon> = {
  title: 'trading /DrawingsTrendIcon',
  component: DrawingsTrendIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof DrawingsTrendIcon> = (args) => (
  <DrawingsTrendIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default DrawingsTrendIconStory;
