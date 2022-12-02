import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusFinishIcon } from '../src/react/Trading/Status';

const StatusFinishIconStory: ComponentMeta<typeof StatusFinishIcon> = {
  title: 'trading /StatusFinishIcon',
  component: StatusFinishIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof StatusFinishIcon> = (args) => <StatusFinishIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default StatusFinishIconStory;
