import { Density } from '@awsui/global-styles';
import { createContext } from 'react';

export default createContext<[Density, (density: Density) => void] | null>(
  null,
);
