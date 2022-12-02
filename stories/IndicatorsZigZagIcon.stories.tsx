import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsZigZagIcon } from '../src/react/Trading/Indicators';

const IndicatorsZigZagIconStory: ComponentMeta<typeof IndicatorsZigZagIcon> = {
  title: 'trading /IndicatorsZigZagIcon',
  component: IndicatorsZigZagIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsZigZagIcon> = (args) => (
  <IndicatorsZigZagIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsZigZagIconStory;
