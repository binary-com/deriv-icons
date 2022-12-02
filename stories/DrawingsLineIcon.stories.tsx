import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DrawingsLineIcon } from '../src/react/Trading/Drawings';

const DrawingsLineIconStory: ComponentMeta<typeof DrawingsLineIcon> = {
  title: 'trading /DrawingsLineIcon',
  component: DrawingsLineIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof DrawingsLineIcon> = (args) => <DrawingsLineIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default DrawingsLineIconStory;
