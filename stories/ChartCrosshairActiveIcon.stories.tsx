import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartCrosshairActiveIcon } from '../src/react/Trading/Chart';

const ChartCrosshairActiveIconStory: ComponentMeta<typeof ChartCrosshairActiveIcon> = {
  title: 'trading /ChartCrosshairActiveIcon',
  component: ChartCrosshairActiveIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartCrosshairActiveIcon> = (args) => (
  <ChartCrosshairActiveIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartCrosshairActiveIconStory;
