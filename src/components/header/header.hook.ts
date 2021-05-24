import { MutableRefObject } from 'react';
import useHideContainerContent from '../../hooks/use-hide-container-content';

interface State {
  ref: MutableRefObject<HTMLDivElement | null>;
}

export default function useHeader(): State {
  return {
    ref: useHideContainerContent(),
  };
}
