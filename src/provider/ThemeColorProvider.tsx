import { ThemeProvider } from 'styled-components';
import { mainThemeColor } from '../styles/theme';
import { ThemeColorProviderProps } from './type';

/**
 * 테마지정을 위한 Provider
 *
 * @example
 * import { theme } from "테마 경로"
 *
 * const ThemeTest = styled.div`
 *  background-color: ${({ theme }) => theme.main_100};
 *  color: ${({ theme }) => theme.text_100};
 * `
 *
 * @example
 * import { useTheme } from "styled-components"
 *
 * const theme = useTheme()
 * ...
 */
export default function ThemeColorProvider({
  children,
}: ThemeColorProviderProps) {
  return <ThemeProvider theme={mainThemeColor}>{children}</ThemeProvider>;
}
