import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';

export default function Alarms(): ReactElement {
  return (
    <AppLayout breadcrumbsHide contentType="form" toolsHide>
      Use the navigation bar to manage your resources.
    </AppLayout>
  );
}
