import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeSellManualSoldIcon } from '../src/react/Trading/Trade';

const TradeSellManualSoldIconStory: ComponentMeta<typeof TradeSellManualSoldIcon> = {
  title: 'trading /TradeSellManualSoldIcon',
  component: TradeSellManualSoldIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeSellManualSoldIcon> = (args) => (
  <TradeSellManualSoldIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeSellManualSoldIconStory;
