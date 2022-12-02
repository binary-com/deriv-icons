import outPutEs6 from '@figma-export/output-components-as-es6';
import outPutSvg from '@figma-export/output-components-as-svg';
import outPutSvgrComponent from '@figma-export/output-components-as-svgr';
import outPutSvgStore from '@figma-export/output-components-as-svgstore';
import transformWithSvgo from '@figma-export/transform-svg-with-svgo';
import { ComponentOutputter, FigmaExportRC, StringTransformer } from '@figma-export/types';
import dotenv from 'dotenv';
import outPutStories from './output.stories';
import {
  ESOutPutConfig,
  RenameEsConfig,
  RenameSvgStoreConfig,
  StoriesOutPutConfig,
  SvgOutPutConfig,
  SvgReactOutPutConfig,
  SvgStoreConfig,
} from './outputters.config';
import renameOutPut from './rename.output';

dotenv.config();

const fileId: string = process.env.FILE_ID ?? '';

const outputters: ComponentOutputter[] = [
  outPutSvg(SvgOutPutConfig),
  outPutEs6(ESOutPutConfig),
  outPutSvgrComponent(SvgReactOutPutConfig),
  renameOutPut(RenameEsConfig),
  outPutStories(StoriesOutPutConfig),
  outPutSvgStore(SvgStoreConfig),
  renameOutPut(RenameSvgStoreConfig),
];

const transformers: StringTransformer[] = [
  transformWithSvgo({
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      // {
      //   name: 'removeAttrs',
      //   params: {
      //     attrs: 'fill',
      //   },
      // },
      'removeUselessStrokeAndFill',
      {
        name: 'removeDimensions',
        active: true,
      },
    ],
  }),
];

(module.exports as FigmaExportRC) = {
  commands: [
    [
      'components',
      {
        fileId,
        onlyFromPages: ['deriv-icons'],
        transformers,
        outputters,
      },
    ],
  ],
};
