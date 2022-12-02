import { pascalCase } from '@figma-export/utils';
import * as FigmaExport from '@figma-export/types';

export const getFileDescriptor = (componentName: string) => {
  const fullName = componentName.split('/').join('_');
  const splits = fullName.split('_');
  return {
    category: splits[0],
    subCategory: splits[1],
    variant: splits[2],
  };
};

export const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const lowerFirst = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

export const getSVGBaseName = (options: FigmaExport.ComponentOutputterParamOption) => {
  return `${pascalCase(options.basename)}.svg`;
};

export const getDirName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const { category, subCategory } = getFileDescriptor(options.componentName);
  return `${pascalCase(category)}/${pascalCase(subCategory)}`;
};

export const getSvgEs6VariableName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const componentName = getComponentName(options);
  return pascalCase(`Svg/${componentName}`);
};
export const getComponentName = (options: FigmaExport.ComponentOutputterParamOption) => {
  const { subCategory, variant } = getFileDescriptor(options.componentName);
  return pascalCase(`${subCategory} ${variant} Icon`);
};

export const getComponentFilename = (options: FigmaExport.ComponentOutputterParamOption) =>
  pascalCase(options.basename);

export const getExportTemplate = (options: FigmaExport.ComponentOutputterParamOption) => {
  const reactComponentName = getComponentName(options);
  const reactComponentFilename = `${getComponentFilename(options)}`;
  return `export { default as ${reactComponentName} } from './${reactComponentFilename}';`;
};

export const getESOriginalPath = (pageName: string) => {
  return `${pageName}.js`;
};

export const getESFinalPath = (pageName: string) => {
  return 'index.ts';
};

export const getSvgStoreOriginalPath = (pageName: string) => {
  return `${pageName}.svg`;
};

export const getSvgStoreFinalPath = (pageName: string) => {
  return 'icons.svg';
};
