import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsChartTypeAreaIcon } from '../src/react/Trading/Tools';

const ToolsChartTypeAreaIconStory: ComponentMeta<typeof ToolsChartTypeAreaIcon> = {
  title: 'trading /ToolsChartTypeAreaIcon',
  component: ToolsChartTypeAreaIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsChartTypeAreaIcon> = (args) => (
  <ToolsChartTypeAreaIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsChartTypeAreaIconStory;
