import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesMarketSyntheticIndicesIcon } from '../src/react/Trading/Categories';

const CategoriesMarketSyntheticIndicesIconStory: ComponentMeta<
  typeof CategoriesMarketSyntheticIndicesIcon
> = {
  title: 'trading /CategoriesMarketSyntheticIndicesIcon',
  component: CategoriesMarketSyntheticIndicesIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesMarketSyntheticIndicesIcon> = (args) => (
  <CategoriesMarketSyntheticIndicesIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesMarketSyntheticIndicesIconStory;
