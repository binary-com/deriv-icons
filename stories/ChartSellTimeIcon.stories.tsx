import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartSellTimeIcon } from '../src/react/Trading/Chart';

const ChartSellTimeIconStory: ComponentMeta<typeof ChartSellTimeIcon> = {
  title: 'trading /ChartSellTimeIcon',
  component: ChartSellTimeIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartSellTimeIcon> = (args) => (
  <ChartSellTimeIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartSellTimeIconStory;
