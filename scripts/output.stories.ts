import * as FigmaExport from '@figma-export/types';
import { ComponentOutputter } from '@figma-export/types';
import fs from 'fs';
import path from 'path';
import { getFileDescriptor } from './figma.utils';
import { generateStoryBook } from './templates/story.template';

interface TOutPutStoriesOptions {
  outPutPath: fs.PathLike;
  getDirName: (options: FigmaExport.ComponentOutputterParamOption) => string;
  getComponentName: (options: FigmaExport.ComponentOutputterParamOption) => string;
}

const outPutStories = ({
  outPutPath,
  getDirName,
  getComponentName,
}: TOutPutStoriesOptions): ComponentOutputter => {
  return async (pages) => {
    const dir = outPutPath ?? './stories/';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    pages.forEach(({ name: pageName, components }) => {
      components.forEach(({ name: componentName, figmaExport }) => {
        const options = {
          pageName,
          componentName,
          ...figmaExport,
        };
        const { category } = getFileDescriptor(options.componentName);
        const IconName = getComponentName(options);
        const dirName = getDirName(options);
        const storybook = generateStoryBook({
          IconName,
          dirName,
          category,
        });
        const storyBookPath = path.resolve(dir.toString(), `${IconName}.stories.tsx`);
        fs.writeFileSync(storyBookPath, storybook);
      });
    });
  };
};

export default outPutStories;
