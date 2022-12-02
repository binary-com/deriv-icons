import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsAlligatorIcon } from '../src/react/Trading/Indicators';

const IndicatorsAlligatorIconStory: ComponentMeta<typeof IndicatorsAlligatorIcon> = {
  title: 'trading /IndicatorsAlligatorIcon',
  component: IndicatorsAlligatorIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsAlligatorIcon> = (args) => (
  <IndicatorsAlligatorIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsAlligatorIconStory;
