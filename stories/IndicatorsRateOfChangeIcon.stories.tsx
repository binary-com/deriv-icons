import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsRateOfChangeIcon } from '../src/react/Trading/Indicators';

const IndicatorsRateOfChangeIconStory: ComponentMeta<typeof IndicatorsRateOfChangeIcon> = {
  title: 'trading /IndicatorsRateOfChangeIcon',
  component: IndicatorsRateOfChangeIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsRateOfChangeIcon> = (args) => (
  <IndicatorsRateOfChangeIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsRateOfChangeIconStory;
