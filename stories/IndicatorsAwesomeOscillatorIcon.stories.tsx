import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsAwesomeOscillatorIcon } from '../src/react/Trading/Indicators';

const IndicatorsAwesomeOscillatorIconStory: ComponentMeta<typeof IndicatorsAwesomeOscillatorIcon> =
  {
    title: 'trading /IndicatorsAwesomeOscillatorIcon',
    component: IndicatorsAwesomeOscillatorIcon,
    argTypes: {
      color: { control: { type: 'color' } },
      fill: { control: { type: 'color' } },
    },
    parameters: {
      layout: 'centered',
    },
  };

const Template: ComponentStory<typeof IndicatorsAwesomeOscillatorIcon> = (args) => (
  <IndicatorsAwesomeOscillatorIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsAwesomeOscillatorIconStory;
