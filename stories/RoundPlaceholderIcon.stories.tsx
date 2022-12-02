import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundPlaceholderIcon } from '../src/react/Currencies/Round';

const RoundPlaceholderIconStory: ComponentMeta<typeof RoundPlaceholderIcon> = {
  title: 'currencies /RoundPlaceholderIcon',
  component: RoundPlaceholderIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundPlaceholderIcon> = (args) => (
  <RoundPlaceholderIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundPlaceholderIconStory;
