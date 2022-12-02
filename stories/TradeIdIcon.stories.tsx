import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeIdIcon } from '../src/react/Trading/Trade';

const TradeIdIconStory: ComponentMeta<typeof TradeIdIcon> = {
  title: 'trading /TradeIdIcon',
  component: TradeIdIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeIdIcon> = (args) => <TradeIdIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeIdIconStory;
