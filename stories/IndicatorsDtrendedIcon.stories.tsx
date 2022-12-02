import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsDtrendedIcon } from '../src/react/Trading/Indicators';

const IndicatorsDtrendedIconStory: ComponentMeta<typeof IndicatorsDtrendedIcon> = {
  title: 'trading /IndicatorsDtrendedIcon',
  component: IndicatorsDtrendedIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsDtrendedIcon> = (args) => (
  <IndicatorsDtrendedIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsDtrendedIconStory;
