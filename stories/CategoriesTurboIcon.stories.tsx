import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoriesTurboIcon } from '../src/react/Trading/Categories';

const CategoriesTurboIconStory: ComponentMeta<typeof CategoriesTurboIcon> = {
  title: 'trading /CategoriesTurboIcon',
  component: CategoriesTurboIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof CategoriesTurboIcon> = (args) => (
  <CategoriesTurboIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default CategoriesTurboIconStory;
