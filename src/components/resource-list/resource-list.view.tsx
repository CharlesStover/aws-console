import Box from '@awsui/components-react/box';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import useResourceList from './resource-list.hook';

export default function ResourceList(): ReactElement {
  const { breadcrumbs, resourceTypeText } = useResourceList();

  return (
    <AppLayout breadcrumbs={breadcrumbs} toolsHide>
      <Box variant="p">You are viewing your {resourceTypeText}.</Box>
    </AppLayout>
  );
}
