import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useUsers from './users.hook';

export default function Users(): ReactElement {
  const { breadcrumbs } = useUsers();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="form" toolsHide>
      IAM users
    </AppLayout>
  );
}
