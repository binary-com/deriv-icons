import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartTypesAreaIcon } from '../src/react/Trading/ChartTypes';

const ChartTypesAreaIconStory: ComponentMeta<typeof ChartTypesAreaIcon> = {
  title: 'trading /ChartTypesAreaIcon',
  component: ChartTypesAreaIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartTypesAreaIcon> = (args) => (
  <ChartTypesAreaIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartTypesAreaIconStory;
