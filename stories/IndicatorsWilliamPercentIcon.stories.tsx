import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsWilliamPercentIcon } from '../src/react/Trading/Indicators';

const IndicatorsWilliamPercentIconStory: ComponentMeta<typeof IndicatorsWilliamPercentIcon> = {
  title: 'trading /IndicatorsWilliamPercentIcon',
  component: IndicatorsWilliamPercentIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsWilliamPercentIcon> = (args) => (
  <IndicatorsWilliamPercentIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsWilliamPercentIconStory;
