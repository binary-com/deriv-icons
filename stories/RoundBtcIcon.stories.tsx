import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundBtcIcon } from '../src/react/Currencies/Round';

const RoundBtcIconStory: ComponentMeta<typeof RoundBtcIcon> = {
  title: 'currencies /RoundBtcIcon',
  component: RoundBtcIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundBtcIcon> = (args) => <RoundBtcIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundBtcIconStory;
