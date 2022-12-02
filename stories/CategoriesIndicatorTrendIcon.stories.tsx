import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesIndicatorTrendIcon } from '../src/react/Trading/Categories';

const CategoriesIndicatorTrendIconStory: ComponentMeta<typeof CategoriesIndicatorTrendIcon> = {
  title: 'trading /CategoriesIndicatorTrendIcon',
  component: CategoriesIndicatorTrendIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesIndicatorTrendIcon> = (args) => (
  <CategoriesIndicatorTrendIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesIndicatorTrendIconStory;
