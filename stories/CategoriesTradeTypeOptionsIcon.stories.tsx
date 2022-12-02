import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTradeTypeOptionsIcon } from '../src/react/Trading/Categories';

const CategoriesTradeTypeOptionsIconStory: ComponentMeta<typeof CategoriesTradeTypeOptionsIcon> = {
  title: 'trading /CategoriesTradeTypeOptionsIcon',
  component: CategoriesTradeTypeOptionsIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesTradeTypeOptionsIcon> = (args) => (
  <CategoriesTradeTypeOptionsIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTradeTypeOptionsIconStory;
