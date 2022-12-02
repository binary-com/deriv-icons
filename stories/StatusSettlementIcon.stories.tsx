import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusSettlementIcon } from '../src/react/Trading/Status';

const StatusSettlementIconStory: ComponentMeta<typeof StatusSettlementIcon> = {
  title: 'trading /StatusSettlementIcon',
  component: StatusSettlementIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof StatusSettlementIcon> = (args) => (
  <StatusSettlementIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default StatusSettlementIconStory;
