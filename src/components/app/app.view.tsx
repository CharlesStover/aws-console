import '@awsui/global-styles/index.css';
import { I18nProvider } from 'lazy-i18n';
import { ReactElement, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../../components/main';
import Locale from '../../constants/locale';
import TRANSLATIONS from '../../constants/translations';
import Density from '../../contexts/density';
import LocaleContext from '../../contexts/locale';
import Mode from '../../contexts/mode';
import Motion from '../../contexts/motion';
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
                  <Main
                    accessKeyId={accessKeyId}
                    onAuthentication={onAuthentication}
                    secretAccessKey={secretAccessKey}
                  />
                </Motion.Provider>
              </Mode.Provider>
            </LocaleContext.Provider>
          </I18nProvider>
        </Density.Provider>
      </BrowserRouter>
    </StrictMode>
  );
}
