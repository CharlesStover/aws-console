import { Mode } from '@awsui/global-styles';
import { createContext } from 'react';

export default createContext<[Mode, (mode: Mode) => void] | null>(null);
