import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsRsiIcon } from '../src/react/Trading/Indicators';

const IndicatorsRsiIconStory: ComponentMeta<typeof IndicatorsRsiIcon> = {
  title: 'trading /IndicatorsRsiIcon',
  component: IndicatorsRsiIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsRsiIcon> = (args) => (
  <IndicatorsRsiIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsRsiIconStory;
