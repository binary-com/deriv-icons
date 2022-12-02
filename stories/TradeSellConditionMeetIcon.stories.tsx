import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeSellConditionMeetIcon } from '../src/react/Trading/Trade';

const TradeSellConditionMeetIconStory: ComponentMeta<typeof TradeSellConditionMeetIcon> = {
  title: 'trading /TradeSellConditionMeetIcon',
  component: TradeSellConditionMeetIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeSellConditionMeetIcon> = (args) => (
  <TradeSellConditionMeetIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeSellConditionMeetIconStory;
