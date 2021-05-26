import Box from '@awsui/components-react/box';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';

export default function Alarms(): ReactElement {
  return (
    <AppLayout breadcrumbsHide contentType="form" toolsHide>
      <Box variant="p">Use the navigation bar to manage your resources.</Box>
    </AppLayout>
  );
}
