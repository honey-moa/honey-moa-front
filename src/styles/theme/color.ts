import { DefaultTheme } from 'styled-components';

/**
 * 버튼의 경우에 번호에 맞게 같이 사용하시면 됩니다.
 */
export const mainThemeColor: DefaultTheme = {
  bg: {
    primary: '#FFFFFF',
    secondary: '#FFF3E0',
    tertiary: '#f3f4f6',
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
    quaternary: '#b45309',
  },
  shadow: {
    primary: '#D3D3D3',
  },
  accent: {
    red: '#FF5252', // 강조 색상
    green: '#00E676', // 강조 색상
  },
} as const;

export const darkThemeColor: DefaultTheme = {
  bg: {
    primary: '#212121', // 어두운 배경색
    secondary: '#1E1E1E', // 어두운 배경색
    tertiary: '#2C2C2C', // 어두운 배경색
  },
  button: {
    primary: {
      base: '#FFB300', // 밝은 버튼 색상 유지
      hover: '#FF9800', // 밝은 버튼 색상 유지
    },
    secondary: {
      base: '#FF7043', // 밝은 버튼 색상 유지
      hover: '#FF5722', // 밝은 버튼 색상 유지
    },
    // 흰 바탕 버튼
    tertiary: {
      base: '#2C2C2C', // 어두운 배경색
      hover: '#3C3C3C', // 어두운 배경색
    },
  },
  border: {
    primary: '#424242', // 어두운 테두리 색상
    secondary: '#2C2C2C', // 어두운 테두리 색상
  },
  text: {
    primary: '#E0E0E0', // 밝은 텍스트 색상
    secondary: '#FFFFFF', // 밝은 텍스트 색상
    tertiary: '#B0B0B0', // 밝은 텍스트 색상
    quaternary: '#FFB300', // 강조 텍스트 색상
  },
  shadow: {
    primary: '#000000', // 어두운 그림자 색상
  },
  accent: {
    red: '#FF5252', // 강조 색상
    green: '#00E676', // 강조 색상
  }, // 강조 색상
} as const;

export type MainThemeColor = typeof mainThemeColor;
