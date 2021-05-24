import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useRoles from './roles.hook';

export default function Alarms(): ReactElement {
  const { breadcrumbs } = useRoles();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="form" toolsHide>
      IAM roles
    </AppLayout>
  );
}
