import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundBusdIcon } from '../src/react/Currencies/Round';

const RoundBusdIconStory: ComponentMeta<typeof RoundBusdIcon> = {
  title: 'currencies /RoundBusdIcon',
  component: RoundBusdIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundBusdIcon> = (args) => <RoundBusdIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundBusdIconStory;
