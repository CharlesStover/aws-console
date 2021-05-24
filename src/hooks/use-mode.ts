import { Mode as ModeType } from '@awsui/global-styles';
import { useContext } from 'react';
import ModeContext from '../contexts/mode';

type State = [ModeType, (mode: ModeType) => void];

export default function useMode(): State {
  const value: State | null = useContext(ModeContext);
  if (value === null) {
    throw new Error('The Mode context was not mounted.');
  }
  return value;
}
