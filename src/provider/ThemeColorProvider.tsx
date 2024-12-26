import { ThemeProvider } from 'styled-components';
import { mainThemeColor } from '../styles/theme';

/**
 * 테마지정을 위한 Provider
 */
export default function ThemeColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={mainThemeColor}>{children}</ThemeProvider>;
}
