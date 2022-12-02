import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsRainbowIcon } from '../src/react/Trading/Indicators';

const IndicatorsRainbowIconStory: ComponentMeta<typeof IndicatorsRainbowIcon> = {
  title: 'trading /IndicatorsRainbowIcon',
  component: IndicatorsRainbowIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsRainbowIcon> = (args) => (
  <IndicatorsRainbowIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsRainbowIconStory;
