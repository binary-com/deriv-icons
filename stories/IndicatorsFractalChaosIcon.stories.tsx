import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsFractalChaosIcon } from '../src/react/Trading/Indicators';

const IndicatorsFractalChaosIconStory: ComponentMeta<typeof IndicatorsFractalChaosIcon> = {
  title: 'trading /IndicatorsFractalChaosIcon',
  component: IndicatorsFractalChaosIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsFractalChaosIcon> = (args) => (
  <IndicatorsFractalChaosIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsFractalChaosIconStory;
