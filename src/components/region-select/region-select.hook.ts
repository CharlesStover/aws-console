import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { SelectProps } from '@awsui/components-react/select';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useCallback, useMemo } from 'react';
import Region from '../../constants/region';
import REGION_OPTIONS from '../../constants/region-options';
import useRegion from '../../hooks/use-region';

interface State {
  ariaLabel?: string;
  handleChange(
    this: void,
    event: NonCancelableCustomEvent<SelectProps.ChangeDetail>,
  ): void;
  selectedOption: SelectProps.Option;
}

export default function useRegionSelect(): State {
  const [region, setRegion] = useRegion();

  // Contexts
  const translate: TranslateFunction = useTranslate();

  return {
    ariaLabel: translate('Region'),

    handleChange: useCallback(
      (e: CustomEvent<SelectProps.ChangeDetail>): void => {
        // All option values are `Region`s.
        setRegion(e.detail.selectedOption.value as Region);
      },
      [setRegion],
    ),

    selectedOption: useMemo((): SelectProps.Option => {
      const findSelectedOption = (option: SelectProps.Option): boolean =>
        option.value === region;

      // Each `Region` value is guaranteed to have an option.
      return REGION_OPTIONS.find(findSelectedOption) as SelectProps.Option;
    }, [region]),
  };
}
