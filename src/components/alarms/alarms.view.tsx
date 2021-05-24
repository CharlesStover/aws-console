import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useAlarms from './alarms.hook';

export default function Alarms(): ReactElement {
  const { breadcrumbs } = useAlarms();

  return (
    <AppLayout breadcrumbs={breadcrumbs} contentType="form" toolsHide>
      CloudWatch Alarms
    </AppLayout>
  );
}
