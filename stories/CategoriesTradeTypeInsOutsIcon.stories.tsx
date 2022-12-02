import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTradeTypeInsOutsIcon } from '../src/react/Trading/Categories';

const CategoriesTradeTypeInsOutsIconStory: ComponentMeta<typeof CategoriesTradeTypeInsOutsIcon> = {
  title: 'trading /CategoriesTradeTypeInsOutsIcon',
  component: CategoriesTradeTypeInsOutsIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesTradeTypeInsOutsIcon> = (args) => (
  <CategoriesTradeTypeInsOutsIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTradeTypeInsOutsIconStory;
