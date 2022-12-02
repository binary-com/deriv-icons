import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsChartTypeHollowIcon } from '../src/react/Trading/Tools';

const ToolsChartTypeHollowIconStory: ComponentMeta<typeof ToolsChartTypeHollowIcon> = {
  title: 'trading /ToolsChartTypeHollowIcon',
  component: ToolsChartTypeHollowIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsChartTypeHollowIcon> = (args) => (
  <ToolsChartTypeHollowIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsChartTypeHollowIconStory;
