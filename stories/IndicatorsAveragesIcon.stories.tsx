import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsAveragesIcon } from '../src/react/Trading/Indicators';

const IndicatorsAveragesIconStory: ComponentMeta<typeof IndicatorsAveragesIcon> = {
  title: 'trading /IndicatorsAveragesIcon',
  component: IndicatorsAveragesIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsAveragesIcon> = (args) => (
  <IndicatorsAveragesIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsAveragesIconStory;
