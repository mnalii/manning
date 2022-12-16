import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { useSettingsContext } from '../components/settings';
//
import palette from './palette';
import typography from './typography';
import customShadows from './customShadows';
import GlobalStyles from './globalStyles';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { themeMode, themeDirection } = useSettingsContext();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      typography,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      customShadows: customShadows(themeMode),
    }),
    [themeDirection, themeMode]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
