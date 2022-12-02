import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundAudIcon } from '../src/react/Currencies/Round';

const RoundAudIconStory: ComponentMeta<typeof RoundAudIcon> = {
  title: 'currencies /RoundAudIcon',
  component: RoundAudIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundAudIcon> = (args) => <RoundAudIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundAudIconStory;
