import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { SelectProps } from '@awsui/components-react/select';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useCallback, useMemo } from 'react';
import Locale from '../../constants/locale';

interface Props {
  onChange(locale: Locale): void;
  value: Locale;
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

export default function useLocaleSelect({ onChange, value }: Props): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const options: SelectProps.Option[] = useMemo((): SelectProps.Option[] => {
    return [
      {
        label: translate('English') || 'English',
        value: Locale.EnUs,
      },
    ];
  }, [translate]);

  return {
    ariaLabel: translate('Locale'),
    options,

    handleChange: useCallback(
      (e: CustomEvent<SelectProps.ChangeDetail>): void => {
        // All option values are `Locale`s.
        onChange(e.detail.selectedOption.value as Locale);
      },
      [onChange],
    ),

    selectedOption: useMemo((): SelectProps.Option => {
      const findSelectedOption = (option: SelectProps.Option): boolean =>
        option.value === value;

      // Each `Locale` value is guaranteed to have an option.
      return options.find(findSelectedOption) as SelectProps.Option;
    }, [options, value]),
  };
}
