import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartTypesCandleIcon } from '../src/react/Trading/ChartTypes';

const ChartTypesCandleIconStory: ComponentMeta<typeof ChartTypesCandleIcon> = {
  title: 'trading /ChartTypesCandleIcon',
  component: ChartTypesCandleIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartTypesCandleIcon> = (args) => (
  <ChartTypesCandleIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartTypesCandleIconStory;
