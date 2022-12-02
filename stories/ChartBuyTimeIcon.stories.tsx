import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartBuyTimeIcon } from '../src/react/Trading/Chart';

const ChartBuyTimeIconStory: ComponentMeta<typeof ChartBuyTimeIcon> = {
  title: 'trading /ChartBuyTimeIcon',
  component: ChartBuyTimeIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartBuyTimeIcon> = (args) => <ChartBuyTimeIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartBuyTimeIconStory;
