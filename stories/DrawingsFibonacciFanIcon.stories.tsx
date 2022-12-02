import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DrawingsFibonacciFanIcon } from '../src/react/Trading/Drawings';

const DrawingsFibonacciFanIconStory: ComponentMeta<typeof DrawingsFibonacciFanIcon> = {
  title: 'trading /DrawingsFibonacciFanIcon',
  component: DrawingsFibonacciFanIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof DrawingsFibonacciFanIcon> = (args) => (
  <DrawingsFibonacciFanIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default DrawingsFibonacciFanIconStory;
