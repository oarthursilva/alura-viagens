import { DefaultTheme } from 'styled-components';
import { BreakpointsTypes } from 'src/types/breakpointsType';
import { typographyVariants } from './typographyVariants';

import { ColorsType } from '../types/colorsType';

const colors: ColorsType = {
  background: {
    light: {
      color: '#ffffff',
    },
    main: {
      color: '#35B6FF',
    },
  },
  borders: {
    main: {
      color: '#35B6FF',
    },
  },
  primary: {
    main: {
      color: '#35B6FF',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#000000',
    },
  },
  tertiary: {
    main: {
      color: '#32363a',
    },
  },
};

export const breakpoints: BreakpointsTypes = {
  xs: 0,
  sm: 400,
  md: 768,
  lg: 992,
  xl: 1120,
};

export const theme: DefaultTheme = {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '10px',
  transition: '200ms ease-in-out',
};
