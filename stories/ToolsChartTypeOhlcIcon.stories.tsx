import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsChartTypeOhlcIcon } from '../src/react/Trading/Tools';

const ToolsChartTypeOhlcIconStory: ComponentMeta<typeof ToolsChartTypeOhlcIcon> = {
  title: 'trading /ToolsChartTypeOhlcIcon',
  component: ToolsChartTypeOhlcIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsChartTypeOhlcIcon> = (args) => (
  <ToolsChartTypeOhlcIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsChartTypeOhlcIconStory;
