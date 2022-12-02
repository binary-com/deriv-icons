import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartExitTimeIcon } from '../src/react/Trading/Chart';

const ChartExitTimeIconStory: ComponentMeta<typeof ChartExitTimeIcon> = {
  title: 'trading /ChartExitTimeIcon',
  component: ChartExitTimeIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartExitTimeIcon> = (args) => (
  <ChartExitTimeIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartExitTimeIconStory;
