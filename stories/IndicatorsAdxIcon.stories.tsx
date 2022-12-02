import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsAdxIcon } from '../src/react/Trading/Indicators';

const IndicatorsAdxIconStory: ComponentMeta<typeof IndicatorsAdxIcon> = {
  title: 'trading /IndicatorsAdxIcon',
  component: IndicatorsAdxIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsAdxIcon> = (args) => (
  <IndicatorsAdxIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsAdxIconStory;
