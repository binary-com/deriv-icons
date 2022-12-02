import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundAddIcon } from '../src/react/Currencies/Round';

const RoundAddIconStory: ComponentMeta<typeof RoundAddIcon> = {
  title: 'currencies /RoundAddIcon',
  component: RoundAddIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundAddIcon> = (args) => <RoundAddIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundAddIconStory;
