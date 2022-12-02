import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesIndicatorAveragesIcon } from '../src/react/Trading/Categories';

const CategoriesIndicatorAveragesIconStory: ComponentMeta<typeof CategoriesIndicatorAveragesIcon> =
  {
    title: 'trading /CategoriesIndicatorAveragesIcon',
    component: CategoriesIndicatorAveragesIcon,
    argTypes: {
      color: { control: { type: 'color' } },
      fill: { control: { type: 'color' } },
    },
    parameters: {
      layout: 'centered',
    },
  };

const Template: ComponentStory<typeof CategoriesIndicatorAveragesIcon> = (args) => (
  <CategoriesIndicatorAveragesIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesIndicatorAveragesIconStory;
