import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTradeTypeHighLowIcon } from '../src/react/Trading/Categories';

const CategoriesTradeTypeHighLowIconStory: ComponentMeta<typeof CategoriesTradeTypeHighLowIcon> = {
  title: 'trading /CategoriesTradeTypeHighLowIcon',
  component: CategoriesTradeTypeHighLowIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesTradeTypeHighLowIcon> = (args) => (
  <CategoriesTradeTypeHighLowIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTradeTypeHighLowIconStory;
