import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartResetIcon } from '../src/react/Trading/Chart';

const ChartResetIconStory: ComponentMeta<typeof ChartResetIcon> = {
  title: 'trading /ChartResetIcon',
  component: ChartResetIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartResetIcon> = (args) => <ChartResetIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartResetIconStory;
