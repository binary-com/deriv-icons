import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartEntrySpotIcon } from '../src/react/Trading/Chart';

const ChartEntrySpotIconStory: ComponentMeta<typeof ChartEntrySpotIcon> = {
  title: 'trading /ChartEntrySpotIcon',
  component: ChartEntrySpotIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartEntrySpotIcon> = (args) => (
  <ChartEntrySpotIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartEntrySpotIconStory;
