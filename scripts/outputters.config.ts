import {
  DATA_URL_ES6_OUT_PUT_PATH,
  ES_OUT_PUT_PATH,
  STORIES_OUT_PUT_PATH,
  SVGR_COMPONENT_OUT_PUT_PATH,
  SVG_OUT_PUT_PATH,
} from './figma.constants';
import {
  getDirName,
  getSVGBaseName,
  getSvgEs6VariableName,
  getComponentName,
  getComponentFilename,
  getExportTemplate,
  getESOriginalPath,
  getESFinalPath,
} from './figma.utils';

export const SvgOutPutConfig = {
  output: SVG_OUT_PUT_PATH,
  getBasename: getSVGBaseName,
  getDirname: getDirName,
};

export const ESOutPutConfig = {
  output: DATA_URL_ES6_OUT_PUT_PATH,
  useDataUrl: true,
  getVariableName: getSvgEs6VariableName,
};

export const SvgReactOutPutConfig = {
  output: SVGR_COMPONENT_OUT_PUT_PATH,
  getDirname: getDirName,
  getFileExtension: () => {
    return '.tsx';
  },
  getComponentName,
  getComponentFilename,
  getExportTemplate,
  getSvgrConfig: () => {
    return {
      ref: true,
      svgProps: {
        role: 'img',
        width: '32px',
        height: '32px',
      },
      typescript: true,
    };
  },
};

export const StoriesOutPutConfig = {
  outPutPath: STORIES_OUT_PUT_PATH,
  getComponentName,
  getDirName,
};

export const RenameEsConfig = {
  outPutPath: ES_OUT_PUT_PATH,
  getOriginalPath: getESOriginalPath,
  getFinalPath: getESFinalPath,
};
