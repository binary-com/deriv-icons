import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DrawingsChannelIcon } from '../src/react/Trading/Drawings';

const DrawingsChannelIconStory: ComponentMeta<typeof DrawingsChannelIcon> = {
  title: 'trading /DrawingsChannelIcon',
  component: DrawingsChannelIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof DrawingsChannelIcon> = (args) => (
  <DrawingsChannelIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default DrawingsChannelIconStory;
