import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesIndicatorOthersIcon } from '../src/react/Trading/Categories';

const CategoriesIndicatorOthersIconStory: ComponentMeta<typeof CategoriesIndicatorOthersIcon> = {
  title: 'trading /CategoriesIndicatorOthersIcon',
  component: CategoriesIndicatorOthersIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesIndicatorOthersIcon> = (args) => (
  <CategoriesIndicatorOthersIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesIndicatorOthersIconStory;
