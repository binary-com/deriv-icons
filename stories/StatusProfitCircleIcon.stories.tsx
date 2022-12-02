import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusProfitCircleIcon } from '../src/react/Trading/Status';

const StatusProfitCircleIconStory: ComponentMeta<typeof StatusProfitCircleIcon> = {
  title: 'trading /StatusProfitCircleIcon',
  component: StatusProfitCircleIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof StatusProfitCircleIcon> = (args) => (
  <StatusProfitCircleIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default StatusProfitCircleIconStory;
