import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsGatorIcon } from '../src/react/Trading/Indicators';

const IndicatorsGatorIconStory: ComponentMeta<typeof IndicatorsGatorIcon> = {
  title: 'trading /IndicatorsGatorIcon',
  component: IndicatorsGatorIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsGatorIcon> = (args) => (
  <IndicatorsGatorIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsGatorIconStory;
