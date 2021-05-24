import { CheckboxProps } from '@awsui/components-react/checkbox';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useCallback } from 'react';

interface Props {
  onChange(motion: boolean): void;
}

interface State {
  ariaLabel?: string;
  handleChange(
    this: void,
    event: NonCancelableCustomEvent<CheckboxProps.ChangeDetail>,
  ): void;
}

export default function useMotionCheckbox({ onChange }: Props): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  return {
    ariaLabel: translate('Motion'),

    handleChange: useCallback(
      (e: NonCancelableCustomEvent<CheckboxProps.ChangeDetail>): void => {
        onChange(e.detail.checked);
      },
      [onChange],
    ),
  };
}
