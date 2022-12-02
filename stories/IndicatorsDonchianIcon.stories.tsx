import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IndicatorsDonchianIcon } from '../src/react/Trading/Indicators';

const IndicatorsDonchianIconStory: ComponentMeta<typeof IndicatorsDonchianIcon> = {
  title: 'trading /IndicatorsDonchianIcon',
  component: IndicatorsDonchianIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof IndicatorsDonchianIcon> = (args) => (
  <IndicatorsDonchianIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default IndicatorsDonchianIconStory;
