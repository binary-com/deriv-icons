import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeTargetIcon } from '../src/react/Trading/Trade';

const TradeTargetIconStory: ComponentMeta<typeof TradeTargetIcon> = {
  title: 'trading /TradeTargetIcon',
  component: TradeTargetIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeTargetIcon> = (args) => <TradeTargetIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeTargetIconStory;
