import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesAccumulatorIcon } from '../src/react/Trading/Categories';

const CategoriesAccumulatorIconStory: ComponentMeta<typeof CategoriesAccumulatorIcon> = {
  title: 'trading /CategoriesAccumulatorIcon',
  component: CategoriesAccumulatorIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesAccumulatorIcon> = (args) => (
  <CategoriesAccumulatorIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesAccumulatorIconStory;
