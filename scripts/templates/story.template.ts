export const generateStoryBook = ({
  IconName,
  dirName,
  category,
}: {
  IconName: string;
  dirName: string;
  category: string;
}) => {
  return `import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  
  import { ${IconName} } from "../src/react/${dirName}";
  
  const ${IconName}Story: ComponentMeta<typeof ${IconName}> = {
    title: '${category}/${IconName}',
    component: ${IconName},
    argTypes: {
      color: { control: { type: 'color' } },
      fill: { control: { type: 'color' } },
    },
    parameters: {
      layout: 'centered',
    },
  };

  
  const Template: ComponentStory<typeof ${IconName}> = (args) => (
    <${IconName} {...args} />
  );
  
  export const Primary = Template.bind({});
  Primary.args = {
    width: 128,
    height: 128,
    color: "black",
    fill: "black"
  };
  export default ${IconName}Story;
  `;
};
