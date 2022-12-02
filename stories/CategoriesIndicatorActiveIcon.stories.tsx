import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesIndicatorActiveIcon } from '../src/react/Trading/Categories';

const CategoriesIndicatorActiveIconStory: ComponentMeta<typeof CategoriesIndicatorActiveIcon> = {
  title: 'trading /CategoriesIndicatorActiveIcon',
  component: CategoriesIndicatorActiveIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesIndicatorActiveIcon> = (args) => (
  <CategoriesIndicatorActiveIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesIndicatorActiveIconStory;
