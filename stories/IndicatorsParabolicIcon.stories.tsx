import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsParabolicIcon } from '../src/react/Trading/Indicators';

const IndicatorsParabolicIconStory: ComponentMeta<typeof IndicatorsParabolicIcon> = {
  title: 'trading /IndicatorsParabolicIcon',
  component: IndicatorsParabolicIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsParabolicIcon> = (args) => (
  <IndicatorsParabolicIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsParabolicIconStory;
