import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsDrawingToolsIcon } from '../src/react/Trading/Tools';

const ToolsDrawingToolsIconStory: ComponentMeta<typeof ToolsDrawingToolsIcon> = {
  title: 'trading /ToolsDrawingToolsIcon',
  component: ToolsDrawingToolsIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsDrawingToolsIcon> = (args) => (
  <ToolsDrawingToolsIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsDrawingToolsIconStory;
