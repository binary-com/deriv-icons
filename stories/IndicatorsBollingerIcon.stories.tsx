import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsBollingerIcon } from '../src/react/Trading/Indicators';

const IndicatorsBollingerIconStory: ComponentMeta<typeof IndicatorsBollingerIcon> = {
  title: 'trading /IndicatorsBollingerIcon',
  component: IndicatorsBollingerIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsBollingerIcon> = (args) => (
  <IndicatorsBollingerIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsBollingerIconStory;
