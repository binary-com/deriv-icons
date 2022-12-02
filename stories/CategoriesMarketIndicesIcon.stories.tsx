import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesMarketIndicesIcon } from '../src/react/Trading/Categories';

const CategoriesMarketIndicesIconStory: ComponentMeta<typeof CategoriesMarketIndicesIcon> = {
  title: 'trading /CategoriesMarketIndicesIcon',
  component: CategoriesMarketIndicesIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesMarketIndicesIcon> = (args) => (
  <CategoriesMarketIndicesIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesMarketIndicesIconStory;
