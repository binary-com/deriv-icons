import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesIndicatorVolatilityIcon } from '../src/react/Trading/Categories';

const CategoriesIndicatorVolatilityIconStory: ComponentMeta<
  typeof CategoriesIndicatorVolatilityIcon
> = {
  title: 'trading /CategoriesIndicatorVolatilityIcon',
  component: CategoriesIndicatorVolatilityIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesIndicatorVolatilityIcon> = (args) => (
  <CategoriesIndicatorVolatilityIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesIndicatorVolatilityIconStory;
