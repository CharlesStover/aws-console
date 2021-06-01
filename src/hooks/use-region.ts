import { useContext } from 'react';
import Region from '../constants/region';
import RegionContext from '../contexts/region';

type State = [Region, (region: Region) => void];

export default function useRegion(): State {
  const value: State | null = useContext(RegionContext);
  if (value === null) {
    throw new Error('The Region context was not mounted.');
  }
  return value;
}
