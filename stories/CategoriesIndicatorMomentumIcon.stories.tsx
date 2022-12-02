import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesIndicatorMomentumIcon } from '../src/react/Trading/Categories';

const CategoriesIndicatorMomentumIconStory: ComponentMeta<typeof CategoriesIndicatorMomentumIcon> =
  {
    title: 'trading /CategoriesIndicatorMomentumIcon',
    component: CategoriesIndicatorMomentumIcon,
    argTypes: {
      color: { control: { type: 'color' } },
      fill: { control: { type: 'color' } },
    },
    parameters: {
      layout: 'centered',
    },
  };

const Template: ComponentStory<typeof CategoriesIndicatorMomentumIcon> = (args) => (
  <CategoriesIndicatorMomentumIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesIndicatorMomentumIconStory;
