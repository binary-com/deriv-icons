import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesMarketCryptocurrenciesIcon } from '../src/react/Trading/Categories';

const CategoriesMarketCryptocurrenciesIconStory: ComponentMeta<
  typeof CategoriesMarketCryptocurrenciesIcon
> = {
  title: 'trading /CategoriesMarketCryptocurrenciesIcon',
  component: CategoriesMarketCryptocurrenciesIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesMarketCryptocurrenciesIcon> = (args) => (
  <CategoriesMarketCryptocurrenciesIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesMarketCryptocurrenciesIconStory;
