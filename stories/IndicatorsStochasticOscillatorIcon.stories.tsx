import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsStochasticOscillatorIcon } from '../src/react/Trading/Indicators';

const IndicatorsStochasticOscillatorIconStory: ComponentMeta<
  typeof IndicatorsStochasticOscillatorIcon
> = {
  title: 'trading /IndicatorsStochasticOscillatorIcon',
  component: IndicatorsStochasticOscillatorIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsStochasticOscillatorIcon> = (args) => (
  <IndicatorsStochasticOscillatorIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsStochasticOscillatorIconStory;
