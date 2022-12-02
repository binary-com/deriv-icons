import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TradeDealCancellationIcon } from '../src/react/Trading/Trade';

const TradeDealCancellationIconStory: ComponentMeta<typeof TradeDealCancellationIcon> = {
  title: 'trading /TradeDealCancellationIcon',
  component: TradeDealCancellationIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof TradeDealCancellationIcon> = (args) => (
  <TradeDealCancellationIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default TradeDealCancellationIconStory;
