import { dimensions, height, width } from 'src/utils/dimensions';

/**
 * Theme For Styled Components
 * -
 */
export const appTheme = {
  background: '#D3D3D3',
  primary: '#ff6600',
  secondary: '#CCC',
  highlight: '#FF2353',
  size: dimensions,
  windowHeight: `${height}px`,
  windowWidth: `${width}px`
};

/**
 * Theme For Expo Navigation Header
 * -
 */
export const navTheme = {
  dark: false,
  colors: {
    background: appTheme.background,
    border: appTheme.secondary,
    card: appTheme.background,
    notification: appTheme.highlight,
    primary: appTheme.primary,
    text: appTheme.primary
  }
};
