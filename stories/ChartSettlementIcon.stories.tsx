import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartSettlementIcon } from '../src/react/Trading/Chart';

const ChartSettlementIconStory: ComponentMeta<typeof ChartSettlementIcon> = {
  title: 'trading /ChartSettlementIcon',
  component: ChartSettlementIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartSettlementIcon> = (args) => (
  <ChartSettlementIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartSettlementIconStory;
