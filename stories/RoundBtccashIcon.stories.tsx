import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundBtccashIcon } from '../src/react/Currencies/Round';

const RoundBtccashIconStory: ComponentMeta<typeof RoundBtccashIcon> = {
  title: 'currencies /RoundBtccashIcon',
  component: RoundBtccashIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundBtccashIcon> = (args) => <RoundBtccashIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundBtccashIconStory;
