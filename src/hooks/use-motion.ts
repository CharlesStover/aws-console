import { useContext } from 'react';
import Motion from '../contexts/motion';

type State = [boolean, (motion: boolean) => void];

export default function useMotion(): State {
  const value: State | null = useContext(Motion);
  if (value === null) {
    throw new Error('The Motion context was not mounted.');
  }
  return value;
}
