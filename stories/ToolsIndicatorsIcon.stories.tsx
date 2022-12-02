import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsIndicatorsIcon } from '../src/react/Trading/Tools';

const ToolsIndicatorsIconStory: ComponentMeta<typeof ToolsIndicatorsIcon> = {
  title: 'trading /ToolsIndicatorsIcon',
  component: ToolsIndicatorsIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsIndicatorsIcon> = (args) => (
  <ToolsIndicatorsIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsIndicatorsIconStory;
