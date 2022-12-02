import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTradeTypeMultipliersIcon } from '../src/react/Trading/Categories';

const CategoriesTradeTypeMultipliersIconStory: ComponentMeta<
  typeof CategoriesTradeTypeMultipliersIcon
> = {
  title: 'trading /CategoriesTradeTypeMultipliersIcon',
  component: CategoriesTradeTypeMultipliersIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesTradeTypeMultipliersIcon> = (args) => (
  <CategoriesTradeTypeMultipliersIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTradeTypeMultipliersIconStory;
