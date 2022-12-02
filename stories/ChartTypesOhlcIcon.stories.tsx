import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartTypesOhlcIcon } from '../src/react/Trading/ChartTypes';

const ChartTypesOhlcIconStory: ComponentMeta<typeof ChartTypesOhlcIcon> = {
  title: 'trading /ChartTypesOhlcIcon',
  component: ChartTypesOhlcIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartTypesOhlcIcon> = (args) => (
  <ChartTypesOhlcIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartTypesOhlcIconStory;
