import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundEursIcon } from '../src/react/Currencies/Round';

const RoundEursIconStory: ComponentMeta<typeof RoundEursIcon> = {
  title: 'currencies /RoundEursIcon',
  component: RoundEursIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundEursIcon> = (args) => <RoundEursIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundEursIconStory;
