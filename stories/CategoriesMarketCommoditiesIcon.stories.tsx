import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesMarketCommoditiesIcon } from '../src/react/Trading/Categories';

const CategoriesMarketCommoditiesIconStory: ComponentMeta<typeof CategoriesMarketCommoditiesIcon> =
  {
    title: 'trading /CategoriesMarketCommoditiesIcon',
    component: CategoriesMarketCommoditiesIcon,
    argTypes: {
      color: { control: { type: 'color' } },
      fill: { control: { type: 'color' } },
    },
    parameters: {
      layout: 'centered',
    },
  };

const Template: ComponentStory<typeof CategoriesMarketCommoditiesIcon> = (args) => (
  <CategoriesMarketCommoditiesIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesMarketCommoditiesIconStory;
