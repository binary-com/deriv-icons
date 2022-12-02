import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsMacdIcon } from '../src/react/Trading/Indicators';

const IndicatorsMacdIconStory: ComponentMeta<typeof IndicatorsMacdIcon> = {
  title: 'trading /IndicatorsMacdIcon',
  component: IndicatorsMacdIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsMacdIcon> = (args) => (
  <IndicatorsMacdIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsMacdIconStory;
