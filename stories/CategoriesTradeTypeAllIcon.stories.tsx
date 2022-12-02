import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTradeTypeAllIcon } from '../src/react/Trading/Categories';

const CategoriesTradeTypeAllIconStory: ComponentMeta<typeof CategoriesTradeTypeAllIcon> = {
  title: 'trading /CategoriesTradeTypeAllIcon',
  component: CategoriesTradeTypeAllIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesTradeTypeAllIcon> = (args) => (
  <CategoriesTradeTypeAllIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTradeTypeAllIconStory;
