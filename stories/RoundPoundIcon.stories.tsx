import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundPoundIcon } from '../src/react/Currencies/Round';

const RoundPoundIconStory: ComponentMeta<typeof RoundPoundIcon> = {
  title: 'currencies /RoundPoundIcon',
  component: RoundPoundIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundPoundIcon> = (args) => <RoundPoundIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundPoundIconStory;
