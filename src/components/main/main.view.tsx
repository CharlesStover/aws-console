import { ReactElement } from 'react';
import Authenticate from '../../components/authenticate';
import Routes from '../../components/routes';

interface Props {
  accessKeyId?: string;
  onAccessKeyIdChange(accessKeyId?: string): void;
  onSecretAccessKeyChange(secretAccessKey?: string): void;
  secretAccessKey?: string;
}

export default function Main({
  accessKeyId,
  onAccessKeyIdChange,
  onSecretAccessKeyChange,
  secretAccessKey,
}: Props): ReactElement {
  if (
    typeof accessKeyId === 'undefined' ||
    typeof secretAccessKey === 'undefined'
  ) {
    return (
      <Authenticate
        onAccessKeyIdChange={onAccessKeyIdChange}
        onSecretAccessKeyChange={onSecretAccessKeyChange}
      />
    );
  }

  return <Routes />;
}
