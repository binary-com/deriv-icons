import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeCommissionIcon } from '../src/react/Trading/Trade';

const TradeCommissionIconStory: ComponentMeta<typeof TradeCommissionIcon> = {
  title: 'trading /TradeCommissionIcon',
  component: TradeCommissionIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeCommissionIcon> = (args) => (
  <TradeCommissionIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeCommissionIconStory;
