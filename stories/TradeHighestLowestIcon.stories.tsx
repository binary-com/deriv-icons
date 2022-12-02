import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeHighestLowestIcon } from '../src/react/Trading/Trade';

const TradeHighestLowestIconStory: ComponentMeta<typeof TradeHighestLowestIcon> = {
  title: 'trading /TradeHighestLowestIcon',
  component: TradeHighestLowestIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeHighestLowestIcon> = (args) => (
  <TradeHighestLowestIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeHighestLowestIconStory;
