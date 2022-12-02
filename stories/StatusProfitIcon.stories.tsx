import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusProfitIcon } from '../src/react/Trading/Status';

const StatusProfitIconStory: ComponentMeta<typeof StatusProfitIcon> = {
  title: 'trading /StatusProfitIcon',
  component: StatusProfitIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof StatusProfitIcon> = (args) => <StatusProfitIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default StatusProfitIconStory;
