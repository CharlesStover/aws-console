import { MutableRefObject, useLayoutEffect, useRef } from 'react';

export default function useHideContainerContent(): MutableRefObject<HTMLDivElement | null> {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useLayoutEffect((): void => {
    if (ref.current === null) {
      throw new Error('The header ref was not mounted.');
    }
    const container: HTMLElement = ref.current.firstChild as HTMLElement;
    const content: HTMLElement = container.lastChild as HTMLElement;
    content.style.setProperty('display', 'none');
  }, []);

  return ref;
}
