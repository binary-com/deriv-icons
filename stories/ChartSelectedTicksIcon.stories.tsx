import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartSelectedTicksIcon } from '../src/react/Trading/Chart';

const ChartSelectedTicksIconStory: ComponentMeta<typeof ChartSelectedTicksIcon> = {
  title: 'trading /ChartSelectedTicksIcon',
  component: ChartSelectedTicksIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartSelectedTicksIcon> = (args) => (
  <ChartSelectedTicksIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartSelectedTicksIconStory;
