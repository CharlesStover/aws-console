import { CheckboxProps } from '@awsui/components-react/checkbox';
import { InputProps } from '@awsui/components-react/input';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useCallback } from 'react';
import { useCheckbox, useInput } from 'use-awsui';

interface Props {
  onAuthentication(
    accessKeyId: string,
    secretAccessKey: string,
    remember: boolean,
  ): void;
}

interface State {
  accessKeyId: string;
  accessKeyIdAriaLabel?: string;
  handleAccessKeyIdChange(
    this: void,
    event: NonCancelableCustomEvent<InputProps.ChangeDetail>,
  ): void;
  handleRememberChange(
    this: void,
    event: NonCancelableCustomEvent<CheckboxProps.ChangeDetail>,
  ): void;
  handleSecretAccessKeyChange(
    this: void,
    event: NonCancelableCustomEvent<InputProps.ChangeDetail>,
  ): void;
  handleSubmit(this: void): void;
  remember: boolean;
  secretAccessKey: string;
  secretAccessKeyAriaLabel?: string;
}

export default function useAuthenticate({ onAuthentication }: Props): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const { checked: remember, handleChange: handleRememberChange } =
    useCheckbox();
  const { handleChange: handleAccessKeyIdChange, value: accessKeyId } =
    useInput();
  const { handleChange: handleSecretAccessKeyChange, value: secretAccessKey } =
    useInput();

  return {
    accessKeyId,
    accessKeyIdAriaLabel: translate('Access key ID'),
    handleAccessKeyIdChange,
    handleRememberChange,
    handleSecretAccessKeyChange,
    remember,
    secretAccessKey,
    secretAccessKeyAriaLabel: translate('Secret access key'),

    handleSubmit: useCallback((): void => {
      onAuthentication(accessKeyId, secretAccessKey, remember);
    }, [accessKeyId, onAuthentication, remember, secretAccessKey]),
  };
}
