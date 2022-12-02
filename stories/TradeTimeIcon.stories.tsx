import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeTimeIcon } from '../src/react/Trading/Trade';

const TradeTimeIconStory: ComponentMeta<typeof TradeTimeIcon> = {
  title: 'trading /TradeTimeIcon',
  component: TradeTimeIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeTimeIcon> = (args) => <TradeTimeIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeTimeIconStory;
