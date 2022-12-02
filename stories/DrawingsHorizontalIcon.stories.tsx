import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DrawingsHorizontalIcon } from '../src/react/Trading/Drawings';

const DrawingsHorizontalIconStory: ComponentMeta<typeof DrawingsHorizontalIcon> = {
  title: 'trading /DrawingsHorizontalIcon',
  component: DrawingsHorizontalIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof DrawingsHorizontalIcon> = (args) => (
  <DrawingsHorizontalIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default DrawingsHorizontalIconStory;
