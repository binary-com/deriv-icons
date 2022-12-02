import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeBarrierResetIcon } from '../src/react/Trading/Trade';

const TradeBarrierResetIconStory: ComponentMeta<typeof TradeBarrierResetIcon> = {
  title: 'trading /TradeBarrierResetIcon',
  component: TradeBarrierResetIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeBarrierResetIcon> = (args) => (
  <TradeBarrierResetIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeBarrierResetIconStory;
