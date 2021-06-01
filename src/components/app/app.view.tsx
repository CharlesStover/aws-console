import '@awsui/global-styles/index.css';
import { I18nProvider } from 'lazy-i18n';
import { ReactElement, StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Main from '../../components/main';
import Locale from '../../constants/locale';
import QUERY_CLIENT from '../../constants/query-client';
import TRANSLATIONS from '../../constants/translations';
import Density from '../../contexts/density';
import LocaleContext from '../../contexts/locale';
import Mode from '../../contexts/mode';
import Motion from '../../contexts/motion';
import Region from '../../contexts/region';
import AppProps from '../../types/app-props';
import useApp from './app.hook';
import './app.module.scss';

export default function App({
  accessKeyId,
  density,
  mode,
  motion,
  onAuthentication,
  onDensityChange,
  onModeChange,
  onMotionChange,
  onRegionChange,
  region,
  secretAccessKey,
}: AppProps): ReactElement {
  const { handleLocaleChange, locale } = useApp();

  return (
    <StrictMode>
      <BrowserRouter>
        <Density.Provider value={[density, onDensityChange]}>
          <I18nProvider
            fallbackLocale={Locale.EnUs}
            locale={locale}
            translations={TRANSLATIONS}
          >
            <LocaleContext.Provider value={[locale, handleLocaleChange]}>
              <Mode.Provider value={[mode, onModeChange]}>
                <Motion.Provider value={[motion, onMotionChange]}>
                  <QueryClientProvider client={QUERY_CLIENT}>
                    <Region.Provider value={[region, onRegionChange]}>
                      <Main
                        accessKeyId={accessKeyId}
                        onAuthentication={onAuthentication}
                        secretAccessKey={secretAccessKey}
                      />
                    </Region.Provider>
                  </QueryClientProvider>
                </Motion.Provider>
              </Mode.Provider>
            </LocaleContext.Provider>
          </I18nProvider>
        </Density.Provider>
      </BrowserRouter>
    </StrictMode>
  );
}
