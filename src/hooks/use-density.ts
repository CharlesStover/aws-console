import { Density as DensityType } from '@awsui/global-styles';
import { useContext } from 'react';
import DensityContext from '../contexts/density';

type State = [DensityType, (density: DensityType) => void];

export default function useDensity(): State {
  const value: State | null = useContext(DensityContext);
  if (value === null) {
    throw new Error('The Density context was not mounted.');
  }
  return value;
}
