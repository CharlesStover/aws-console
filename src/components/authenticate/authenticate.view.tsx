import Button from '@awsui/components-react/button';
import Checkbox from '@awsui/components-react/checkbox';
import FormField from '@awsui/components-react/form-field';
import Input from '@awsui/components-react/input';
import SpaceBetween from '@awsui/components-react/space-between';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useAuthenticate from './authenticate.hook';

interface Props {
  onAuthentication(
    accessKeyId: string,
    secretAccessKey: string,
    remember: boolean,
  ): void;
}

export default function Authenticate({
  onAuthentication,
}: Props): ReactElement {
  const {
    accessKeyId,
    accessKeyIdAriaLabel,
    handleAccessKeyIdChange,
    handleRememberChange,
    handleSecretAccessKeyChange,
    handleSubmit,
    remember,
    secretAccessKey,
    secretAccessKeyAriaLabel,
  } = useAuthenticate({ onAuthentication });

  return (
    <AppLayout breadcrumbsHide contentType="form" navigationHide toolsHide>
      <SpaceBetween direction="vertical" size="l">
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
        <Checkbox checked={remember} onChange={handleRememberChange}>
          <I18n>Remember this device</I18n>
        </Checkbox>
        <Button onClick={handleSubmit} variant="primary">
          <I18n>Authenticate</I18n>
        </Button>
      </SpaceBetween>
    </AppLayout>
  );
}
