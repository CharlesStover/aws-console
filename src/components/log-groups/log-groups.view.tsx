import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useLogGroups from './log-groups.hook';

export default function LogGroups(): ReactElement {
  const { breadcrumbs } = useLogGroups();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="form" toolsHide>
      CloudWatch log groups
    </AppLayout>
  );
}
