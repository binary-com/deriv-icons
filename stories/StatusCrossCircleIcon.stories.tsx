import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusCrossCircleIcon } from '../src/react/Trading/Status';

const StatusCrossCircleIconStory: ComponentMeta<typeof StatusCrossCircleIcon> = {
  title: 'trading /StatusCrossCircleIcon',
  component: StatusCrossCircleIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof StatusCrossCircleIcon> = (args) => (
  <StatusCrossCircleIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default StatusCrossCircleIconStory;
