import { ReactElement } from 'react';
import Authenticate from '../../components/authenticate';
import Routes from '../../components/routes';
import Authentication from '../../contexts/authentication';

interface Props {
  accessKeyId?: string;
  onAuthentication(
    accessKeyId: string,
    secretAccessKey: string,
    remember: boolean,
  ): void;
  secretAccessKey?: string;
}

export default function Main({
  accessKeyId,
  onAuthentication,
  secretAccessKey,
}: Props): ReactElement {
  if (
    typeof accessKeyId === 'undefined' ||
    typeof secretAccessKey === 'undefined'
  ) {
    return <Authenticate onAuthentication={onAuthentication} />;
  }

  return (
    <Authentication.Provider value={{ accessKeyId, secretAccessKey }}>
      <Routes />
    </Authentication.Provider>
  );
}
