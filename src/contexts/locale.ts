import { createContext } from 'react';
import Locale from '../constants/locale';

export default createContext<[Locale, (density: Locale) => void] | null>(null);
