import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusLossIcon } from '../src/react/Trading/Status';

const StatusLossIconStory: ComponentMeta<typeof StatusLossIcon> = {
  title: 'trading /StatusLossIcon',
  component: StatusLossIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof StatusLossIcon> = (args) => <StatusLossIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default StatusLossIconStory;
