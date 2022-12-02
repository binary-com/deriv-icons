import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeSellExpiredIcon } from '../src/react/Trading/Trade';

const TradeSellExpiredIconStory: ComponentMeta<typeof TradeSellExpiredIcon> = {
  title: 'trading /TradeSellExpiredIcon',
  component: TradeSellExpiredIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeSellExpiredIcon> = (args) => (
  <TradeSellExpiredIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeSellExpiredIconStory;
