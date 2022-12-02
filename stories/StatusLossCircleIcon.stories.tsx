import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusLossCircleIcon } from '../src/react/Trading/Status';

const StatusLossCircleIconStory: ComponentMeta<typeof StatusLossCircleIcon> = {
  title: 'trading /StatusLossCircleIcon',
  component: StatusLossCircleIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof StatusLossCircleIcon> = (args) => (
  <StatusLossCircleIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default StatusLossCircleIconStory;
