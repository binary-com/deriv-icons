import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTradeTypeUpsDownsIcon } from '../src/react/Trading/Categories';

const CategoriesTradeTypeUpsDownsIconStory: ComponentMeta<typeof CategoriesTradeTypeUpsDownsIcon> =
  {
    title: 'trading /CategoriesTradeTypeUpsDownsIcon',
    component: CategoriesTradeTypeUpsDownsIcon,
    argTypes: {
      color: { control: { type: 'color' } },
      fill: { control: { type: 'color' } },
    },
    parameters: {
      layout: 'centered',
    },
  };

const Template: ComponentStory<typeof CategoriesTradeTypeUpsDownsIcon> = (args) => (
  <CategoriesTradeTypeUpsDownsIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTradeTypeUpsDownsIconStory;
