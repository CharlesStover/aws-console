import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { SelectProps } from '@awsui/components-react/select';
import { Density } from '@awsui/global-styles';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useCallback, useMemo } from 'react';

interface Props {
  onChange(density: Density): void;
  value: Density;
}

interface State {
  ariaLabel?: string;
  handleChange(
    this: void,
    event: NonCancelableCustomEvent<SelectProps.ChangeDetail>,
  ): void;
  options: SelectProps.Option[];
  selectedOption: SelectProps.Option;
}

export default function useDensitySelect({ onChange, value }: Props): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const options: SelectProps.Option[] = useMemo((): SelectProps.Option[] => {
    return [
      {
        label: translate('Comfortable') || '...',
        value: Density.Comfortable,
      },
      {
        label: translate('Compact') || '...',
        value: Density.Compact,
      },
    ];
  }, [translate]);

  return {
    ariaLabel: translate('Density'),
    options,

    handleChange: useCallback(
      (e: CustomEvent<SelectProps.ChangeDetail>): void => {
        // All option values are `Density`s.
        onChange(e.detail.selectedOption.value as Density);
      },
      [onChange],
    ),

    selectedOption: useMemo((): SelectProps.Option => {
      const findSelectedOption = (option: SelectProps.Option): boolean =>
        option.value === value;

      // Each `Density` value is guaranteed to have an option.
      return options.find(findSelectedOption) as SelectProps.Option;
    }, [options, value]),
  };
}
