import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartCrosshairTooltipIcon } from '../src/react/Trading/Chart';

const ChartCrosshairTooltipIconStory: ComponentMeta<typeof ChartCrosshairTooltipIcon> = {
  title: 'trading /ChartCrosshairTooltipIcon',
  component: ChartCrosshairTooltipIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartCrosshairTooltipIcon> = (args) => (
  <ChartCrosshairTooltipIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartCrosshairTooltipIconStory;
