import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesMarketBasketIndicesIcon } from '../src/react/Trading/Categories';

const CategoriesMarketBasketIndicesIconStory: ComponentMeta<
  typeof CategoriesMarketBasketIndicesIcon
> = {
  title: 'trading /CategoriesMarketBasketIndicesIcon',
  component: CategoriesMarketBasketIndicesIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesMarketBasketIndicesIcon> = (args) => (
  <CategoriesMarketBasketIndicesIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesMarketBasketIndicesIconStory;
