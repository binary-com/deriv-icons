import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeDealProtectionIcon } from '../src/react/Trading/Trade';

const TradeDealProtectionIconStory: ComponentMeta<typeof TradeDealProtectionIcon> = {
  title: 'trading /TradeDealProtectionIcon',
  component: TradeDealProtectionIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeDealProtectionIcon> = (args) => (
  <TradeDealProtectionIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeDealProtectionIconStory;
