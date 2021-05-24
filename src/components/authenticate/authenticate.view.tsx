import Button from '@awsui/components-react/button';
import FormField from '@awsui/components-react/form-field';
import Input from '@awsui/components-react/input';
import SpaceBetween from '@awsui/components-react/space-between';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useAuthenticate from './authenticate.hook';

interface Props {
  onAccessKeyIdChange(accessKeyId?: string): void;
  onSecretAccessKeyChange(secretAccessKey?: string): void;
}

export default function Authenticate({
  onAccessKeyIdChange,
  onSecretAccessKeyChange,
}: Props): ReactElement {
  const {
    accessKeyId,
    accessKeyIdAriaLabel,
    handleAccessKeyIdChange,
    handleSecretAccessKeyChange,
    handleSubmit,
    secretAccessKey,
    secretAccessKeyAriaLabel,
  } = useAuthenticate({ onAccessKeyIdChange, onSecretAccessKeyChange });

  return (
    <AppLayout hideBreadcrumbs navigationHide toolsHide>
      <SpaceBetween direction="vertical" size="m">
        <FormField label={<I18n>Access key ID</I18n>}>
          <Input
            ariaLabel={accessKeyIdAriaLabel}
            onChange={handleAccessKeyIdChange}
            value={accessKeyId}
          />
        </FormField>
        <FormField label={<I18n>Secret access key</I18n>}>
          <Input
            ariaLabel={secretAccessKeyAriaLabel}
            onChange={handleSecretAccessKeyChange}
            type="password"
            value={secretAccessKey}
          />
        </FormField>
        <Button onClick={handleSubmit} variant="primary">
          <I18n>Authenticate</I18n>
        </Button>
      </SpaceBetween>
    </AppLayout>
  );
}
