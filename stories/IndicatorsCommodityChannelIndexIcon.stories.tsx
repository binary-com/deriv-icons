import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsCommodityChannelIndexIcon } from '../src/react/Trading/Indicators';

const IndicatorsCommodityChannelIndexIconStory: ComponentMeta<
  typeof IndicatorsCommodityChannelIndexIcon
> = {
  title: 'trading /IndicatorsCommodityChannelIndexIcon',
  component: IndicatorsCommodityChannelIndexIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsCommodityChannelIndexIcon> = (args) => (
  <IndicatorsCommodityChannelIndexIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsCommodityChannelIndexIconStory;
