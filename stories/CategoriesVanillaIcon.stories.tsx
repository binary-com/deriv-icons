import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesVanillaIcon } from '../src/react/Trading/Categories';

const CategoriesVanillaIconStory: ComponentMeta<typeof CategoriesVanillaIcon> = {
  title: 'trading /CategoriesVanillaIcon',
  component: CategoriesVanillaIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesVanillaIcon> = (args) => (
  <CategoriesVanillaIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesVanillaIconStory;
