import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartCrosshairDisabledIcon } from '../src/react/Trading/Chart';

const ChartCrosshairDisabledIconStory: ComponentMeta<typeof ChartCrosshairDisabledIcon> = {
  title: 'trading /ChartCrosshairDisabledIcon',
  component: ChartCrosshairDisabledIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartCrosshairDisabledIcon> = (args) => (
  <ChartCrosshairDisabledIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartCrosshairDisabledIconStory;
