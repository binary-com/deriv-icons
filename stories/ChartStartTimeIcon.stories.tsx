import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartStartTimeIcon } from '../src/react/Trading/Chart';

const ChartStartTimeIconStory: ComponentMeta<typeof ChartStartTimeIcon> = {
  title: 'trading /ChartStartTimeIcon',
  component: ChartStartTimeIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartStartTimeIcon> = (args) => (
  <ChartStartTimeIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartStartTimeIconStory;
