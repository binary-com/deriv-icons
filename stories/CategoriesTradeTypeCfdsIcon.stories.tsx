import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTradeTypeCfdsIcon } from '../src/react/Trading/Categories';

const CategoriesTradeTypeCfdsIconStory: ComponentMeta<typeof CategoriesTradeTypeCfdsIcon> = {
  title: 'trading /CategoriesTradeTypeCfdsIcon',
  component: CategoriesTradeTypeCfdsIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesTradeTypeCfdsIcon> = (args) => (
  <CategoriesTradeTypeCfdsIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTradeTypeCfdsIconStory;
