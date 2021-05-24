import { InputProps } from '@awsui/components-react/input';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useCallback } from 'react';
import { useInput } from 'use-awsui';

interface Props {
  onAccessKeyIdChange(accessKeyId?: string): void;
  onSecretAccessKeyChange(secretAccessKey?: string): void;
}

interface State {
  accessKeyId: string;
  accessKeyIdAriaLabel?: string;
  handleAccessKeyIdChange(
    this: void,
    event: NonCancelableCustomEvent<InputProps.ChangeDetail>,
  ): void;
  handleSecretAccessKeyChange(
    this: void,
    event: NonCancelableCustomEvent<InputProps.ChangeDetail>,
  ): void;
  handleSubmit(this: void): void;
  secretAccessKey: string;
  secretAccessKeyAriaLabel?: string;
}

export default function useAuthenticate({
  onAccessKeyIdChange,
  onSecretAccessKeyChange,
}: Props): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const { handleChange: handleAccessKeyIdChange, value: accessKeyId } =
    useInput();
  const { handleChange: handleSecretAccessKeyChange, value: secretAccessKey } =
    useInput();

  return {
    accessKeyId,
    accessKeyIdAriaLabel: translate('Access key ID'),
    handleAccessKeyIdChange,
    handleSecretAccessKeyChange,
    secretAccessKey,
    secretAccessKeyAriaLabel: translate('Secret access key'),

    handleSubmit: useCallback((): void => {
      onAccessKeyIdChange(accessKeyId);
      onSecretAccessKeyChange(secretAccessKey);
    }, [
      accessKeyId,
      onAccessKeyIdChange,
      onSecretAccessKeyChange,
      secretAccessKey,
    ]),
  };
}
