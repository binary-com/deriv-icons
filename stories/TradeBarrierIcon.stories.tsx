import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeBarrierIcon } from '../src/react/Trading/Trade';

const TradeBarrierIconStory: ComponentMeta<typeof TradeBarrierIcon> = {
  title: 'trading /TradeBarrierIcon',
  component: TradeBarrierIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeBarrierIcon> = (args) => <TradeBarrierIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeBarrierIconStory;
