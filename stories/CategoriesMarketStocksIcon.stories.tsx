import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesMarketStocksIcon } from '../src/react/Trading/Categories';

const CategoriesMarketStocksIconStory: ComponentMeta<typeof CategoriesMarketStocksIcon> = {
  title: 'trading /CategoriesMarketStocksIcon',
  component: CategoriesMarketStocksIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesMarketStocksIcon> = (args) => (
  <CategoriesMarketStocksIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesMarketStocksIconStory;
