import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsChartTypeCandleIcon } from '../src/react/Trading/Tools';

const ToolsChartTypeCandleIconStory: ComponentMeta<typeof ToolsChartTypeCandleIcon> = {
  title: 'trading /ToolsChartTypeCandleIcon',
  component: ToolsChartTypeCandleIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsChartTypeCandleIcon> = (args) => (
  <ToolsChartTypeCandleIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsChartTypeCandleIconStory;
