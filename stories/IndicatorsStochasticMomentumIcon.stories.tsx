import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsStochasticMomentumIcon } from '../src/react/Trading/Indicators';

const IndicatorsStochasticMomentumIconStory: ComponentMeta<
  typeof IndicatorsStochasticMomentumIcon
> = {
  title: 'trading /IndicatorsStochasticMomentumIcon',
  component: IndicatorsStochasticMomentumIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsStochasticMomentumIcon> = (args) => (
  <IndicatorsStochasticMomentumIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsStochasticMomentumIconStory;
