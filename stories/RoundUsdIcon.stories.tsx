import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoundUsdIcon } from '../src/react/Currencies/Round';

const RoundUsdIconStory: ComponentMeta<typeof RoundUsdIcon> = {
  title: 'currencies /RoundUsdIcon',
  component: RoundUsdIcon,
  argTypes: {
    color: { control: { type: 'color' } },
    fill: { control: { type: 'color' } },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template: ComponentStory<typeof RoundUsdIcon> = (args) => <RoundUsdIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 128,
  height: 128,
  color: 'black',
  fill: 'black',
};
export default RoundUsdIconStory;
