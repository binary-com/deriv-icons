import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DrawingsContinuousIcon } from '../src/react/Trading/Drawings';

const DrawingsContinuousIconStory: ComponentMeta<typeof DrawingsContinuousIcon> = {
  title: 'trading /DrawingsContinuousIcon',
  component: DrawingsContinuousIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof DrawingsContinuousIcon> = (args) => (
  <DrawingsContinuousIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default DrawingsContinuousIconStory;
