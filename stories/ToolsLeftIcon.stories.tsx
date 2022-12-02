import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsLeftIcon } from '../src/react/Trading/Tools';

const ToolsLeftIconStory: ComponentMeta<typeof ToolsLeftIcon> = {
  title: 'trading /ToolsLeftIcon',
  component: ToolsLeftIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsLeftIcon> = (args) => <ToolsLeftIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsLeftIconStory;
