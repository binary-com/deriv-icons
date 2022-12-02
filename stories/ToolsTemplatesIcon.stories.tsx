import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsTemplatesIcon } from '../src/react/Trading/Tools';

const ToolsTemplatesIconStory: ComponentMeta<typeof ToolsTemplatesIcon> = {
  title: 'trading /ToolsTemplatesIcon',
  component: ToolsTemplatesIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsTemplatesIcon> = (args) => (
  <ToolsTemplatesIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsTemplatesIconStory;
