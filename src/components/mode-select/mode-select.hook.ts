import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { SelectProps } from '@awsui/components-react/select';
import { Mode } from '@awsui/global-styles';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useCallback, useMemo } from 'react';

interface Props {
  onChange(mode: Mode): void;
  value: Mode;
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

export default function useModeSelect({ onChange, value }: Props): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const options: SelectProps.Option[] = useMemo((): SelectProps.Option[] => {
    return [
      {
        label: translate('Light') || '...',
        value: Mode.Light,
      },
      {
        label: translate('Dark') || '...',
        value: Mode.Dark,
      },
    ];
  }, [translate]);

  return {
    ariaLabel: translate('Mode'),
    options,

    handleChange: useCallback(
      (e: NonCancelableCustomEvent<SelectProps.ChangeDetail>): void => {
        // All options have `Mode` values.
        onChange(e.detail.selectedOption.value as Mode);
      },
      [onChange],
    ),

    selectedOption: useMemo((): SelectProps.Option => {
      const findSelectedOption = (option: SelectProps.Option): boolean =>
        option.value === value;
      return options.find(findSelectedOption) as SelectProps.Option;
    }, [options, value]),
  };
}
