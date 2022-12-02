import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundEthIcon } from '../src/react/Currencies/Round';

const RoundEthIconStory: ComponentMeta<typeof RoundEthIcon> = {
  title: 'currencies /RoundEthIcon',
  component: RoundEthIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundEthIcon> = (args) => <RoundEthIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundEthIconStory;
