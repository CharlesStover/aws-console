import { Density } from '@awsui/global-styles';
import { renderHook } from '@testing-library/react-hooks';
import { PropsWithChildren, ReactElement } from 'react';
import DensityContext from '../contexts/density';
import NOOP from '../test-utils/noop';
import useDensity from './use-density';

describe('useDensity', (): void => {
  it('should return the Density context', (): void => {
    const { result } = renderHook(useDensity, {
      wrapper({ children }: PropsWithChildren<unknown>): ReactElement {
        return (
          <DensityContext.Provider value={[Density.Comfortable, NOOP]}>
            {children}
          </DensityContext.Provider>
        );
      },
    });
    const [density, setDensity] = result.current;
    expect(density).toBe(Density.Comfortable);
    expect(setDensity).toBe(NOOP);
  });
});
