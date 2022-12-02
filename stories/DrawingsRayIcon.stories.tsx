import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DrawingsRayIcon } from '../src/react/Trading/Drawings';

const DrawingsRayIconStory: ComponentMeta<typeof DrawingsRayIcon> = {
  title: 'trading /DrawingsRayIcon',
  component: DrawingsRayIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof DrawingsRayIcon> = (args) => <DrawingsRayIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default DrawingsRayIconStory;
