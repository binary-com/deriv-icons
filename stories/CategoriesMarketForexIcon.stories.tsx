import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesMarketForexIcon } from '../src/react/Trading/Categories';

const CategoriesMarketForexIconStory: ComponentMeta<typeof CategoriesMarketForexIcon> = {
  title: 'trading /CategoriesMarketForexIcon',
  component: CategoriesMarketForexIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesMarketForexIcon> = (args) => (
  <CategoriesMarketForexIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesMarketForexIconStory;
