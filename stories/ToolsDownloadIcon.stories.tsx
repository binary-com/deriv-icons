import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolsDownloadIcon } from '../src/react/Trading/Tools';

const ToolsDownloadIconStory: ComponentMeta<typeof ToolsDownloadIcon> = {
  title: 'trading /ToolsDownloadIcon',
  component: ToolsDownloadIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ToolsDownloadIcon> = (args) => (
  <ToolsDownloadIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ToolsDownloadIconStory;
