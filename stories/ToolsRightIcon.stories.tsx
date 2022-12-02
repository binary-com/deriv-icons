import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsRightIcon } from '../src/react/Trading/Tools';

const ToolsRightIconStory: ComponentMeta<typeof ToolsRightIcon> = {
  title: 'trading /ToolsRightIcon',
  component: ToolsRightIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsRightIcon> = (args) => <ToolsRightIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsRightIconStory;
