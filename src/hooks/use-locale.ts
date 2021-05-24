import { useContext } from 'react';
import LocaleType from '../constants/locale';
import LocaleContext from '../contexts/locale';

type State = [LocaleType, (locale: LocaleType) => void];

export default function useLocale(): State {
  const value: State | null = useContext(LocaleContext);
  if (value === null) {
    throw new Error('The Locale context was not mounted.');
  }
  return value;
}
