import Container from '@awsui/components-react/container';
import AwsuiHeader from '@awsui/components-react/header';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
import HeaderActions from '../../components/header-actions';
import HeaderDescription from '../../components/header-description';
import useHeader from './header.hook';

export default function Header(): ReactElement {
  const { ref } = useHeader();

  return (
    <div ref={ref}>
      <Container
        header={
          <AwsuiHeader
            description={<HeaderDescription />}
            actions={<HeaderActions />}
          >
            <I18n>Open source AWS console</I18n>
          </AwsuiHeader>
        }
      />
    </div>
  );
}
