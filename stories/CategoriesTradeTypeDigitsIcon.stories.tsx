import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTradeTypeDigitsIcon } from '../src/react/Trading/Categories';

const CategoriesTradeTypeDigitsIconStory: ComponentMeta<typeof CategoriesTradeTypeDigitsIcon> = {
  title: 'trading /CategoriesTradeTypeDigitsIcon',
  component: CategoriesTradeTypeDigitsIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesTradeTypeDigitsIcon> = (args) => (
  <CategoriesTradeTypeDigitsIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTradeTypeDigitsIconStory;
