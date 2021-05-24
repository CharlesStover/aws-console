import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';

export default function Alarms(): ReactElement {
  return (
    <AppLayout breadcrumbs={[]} contentType="form" toolsHide>
      Welcome home.
    </AppLayout>
  );
}
