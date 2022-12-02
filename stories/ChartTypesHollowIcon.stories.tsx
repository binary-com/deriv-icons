import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChartTypesHollowIcon } from '../src/react/Trading/ChartTypes';

const ChartTypesHollowIconStory: ComponentMeta<typeof ChartTypesHollowIcon> = {
  title: 'trading /ChartTypesHollowIcon',
  component: ChartTypesHollowIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof ChartTypesHollowIcon> = (args) => (
  <ChartTypesHollowIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default ChartTypesHollowIconStory;
