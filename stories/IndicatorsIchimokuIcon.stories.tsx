import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsIchimokuIcon } from '../src/react/Trading/Indicators';

const IndicatorsIchimokuIconStory: ComponentMeta<typeof IndicatorsIchimokuIcon> = {
  title: 'trading /IndicatorsIchimokuIcon',
  component: IndicatorsIchimokuIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsIchimokuIcon> = (args) => (
  <IndicatorsIchimokuIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsIchimokuIconStory;
