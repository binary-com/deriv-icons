import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusWonIcon } from '../src/react/Trading/Status';

const StatusWonIconStory: ComponentMeta<typeof StatusWonIcon> = {
  title: 'trading /StatusWonIcon',
  component: StatusWonIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof StatusWonIcon> = (args) => <StatusWonIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default StatusWonIconStory;
