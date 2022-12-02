import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsAroonIcon } from '../src/react/Trading/Indicators';

const IndicatorsAroonIconStory: ComponentMeta<typeof IndicatorsAroonIcon> = {
  title: 'trading /IndicatorsAroonIcon',
  component: IndicatorsAroonIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsAroonIcon> = (args) => (
  <IndicatorsAroonIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsAroonIconStory;
