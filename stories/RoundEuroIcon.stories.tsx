import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundEuroIcon } from '../src/react/Currencies/Round';

const RoundEuroIconStory: ComponentMeta<typeof RoundEuroIcon> = {
  title: 'currencies /RoundEuroIcon',
  component: RoundEuroIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundEuroIcon> = (args) => <RoundEuroIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundEuroIconStory;
