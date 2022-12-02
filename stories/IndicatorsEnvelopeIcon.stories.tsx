import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsEnvelopeIcon } from '../src/react/Trading/Indicators';

const IndicatorsEnvelopeIconStory: ComponentMeta<typeof IndicatorsEnvelopeIcon> = {
  title: 'trading /IndicatorsEnvelopeIcon',
  component: IndicatorsEnvelopeIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsEnvelopeIcon> = (args) => (
  <IndicatorsEnvelopeIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsEnvelopeIconStory;
