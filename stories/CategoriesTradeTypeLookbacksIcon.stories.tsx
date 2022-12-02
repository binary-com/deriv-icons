import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTradeTypeLookbacksIcon } from '../src/react/Trading/Categories';

const CategoriesTradeTypeLookbacksIconStory: ComponentMeta<
  typeof CategoriesTradeTypeLookbacksIcon
> = {
  title: 'trading /CategoriesTradeTypeLookbacksIcon',
  component: CategoriesTradeTypeLookbacksIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesTradeTypeLookbacksIcon> = (args) => (
  <CategoriesTradeTypeLookbacksIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTradeTypeLookbacksIconStory;
