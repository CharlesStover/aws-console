import { useState } from 'react';
import Locale from '../../constants/locale';

interface State {
  handleLocaleChange(this: void, locale: Locale): void;
  locale: Locale;
}

export default function useApp(this: void): State {
  // States
  const [locale, handleLocaleChange] = useState(Locale.EnUs);

  return {
    handleLocaleChange,
    locale,
  };
}
