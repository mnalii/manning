import 'simplebar/src/simplebar.css';

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from './routes';
import ThemeProvider from './theme';

import ScrollToTop from './components/scroll-to-top';
import { ThemeSettings, SettingsProvider } from './components/settings';

export default function App() {
  return (
    <HelmetProvider>
      <SettingsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ThemeProvider>
            <ThemeSettings>
              <Router />
            </ThemeSettings>
          </ThemeProvider>
        </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  );
}
