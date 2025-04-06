import 'styled-components';
import { MainThemeColor } from './color';

declare module 'styled-components' {
  export interface DefaultTheme extends MainThemeColor {
    bg: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    button: {
      primary: {
        base: string;
        hover: string;
      };
      secondary: {
        base: string;
        hover: string;
      };
      tertiary: {
        base: string;
        hover: string;
      };
    };
    border: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    shadow: {
      primary: string;
    };
    accent: {
      red: string;
      green: string;
    };
  }
}
