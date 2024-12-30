import { DefaultTheme } from 'styled-components';

/**
 * 버튼의 경우에 번호에 맞게 같이 사용하시면 됩니다.
 */
export const mainThemeColor: DefaultTheme = {
  bg: {
    primary: '#FFFFFF',
    secondary: '#FFF3E0',
  },
  button: {
    primary: {
      base: '#FFB300',
      hover: '#FF9800',
    },
    secondary: {
      base: '#FF7043',
      hover: '#FF5722',
    },
    //흰 바탕 버튼
    tertiary: {
      base: '#FFFFFF',
      hover: '#D3D3D3',
    },
    //svg 버튼
    quaternary: {
      base: '#000000',
      hover: '#f3f4f6',
    },
  },
  border: {
    primary: '#E5E3C3',
    secondary: '#FFFFFF',
  },
  text: {
    primary: '#212121',
    secondary: '#FFFFFF',
    tertiary: '#757575',
  },
  shadow: {
    primary: '#D3D3D3',
  },
  accent: '#e11d48',
};

export const darkThemeColor: DefaultTheme = {
  bg: {
    primary: '#1A1A1A',
    secondary: '#2D2D2D',
  },
  button: {
    primary: {
      base: '#FFD54F',
      hover: '#FFB300',
    },
    secondary: {
      base: '#FFA726',
      hover: '#FF9800',
    },
    tertiary: {
      base: '#FF7043',
      hover: '#FF5722',
    },
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#757575',
  },
  accent: '#FF4081',
};
