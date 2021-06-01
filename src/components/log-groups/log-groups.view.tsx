import { TableProps } from '@awsui/components-react/table';
import { LogGroup } from 'aws-sdk/clients/cloudwatchlogs';
import I18n from 'lazy-i18n';
import { ReactElement } from 'react';
import AppLayout from '../../components/app-layout';
import ResourcesTable from '../../components/resources-table';
import useLogGroups from './log-groups.hook';

const COLUMN_DEFINITIONS: TableProps.ColumnDefinition<LogGroup>[] = [
  {
    id: 'logGroupName',
    header: <I18n>Name</I18n>,
    cell({ logGroupName }: LogGroup): ReactElement {
      return <>{logGroupName}</>;
    },
  },
  {
    id: 'creationTime',
    header: <I18n>Creation time</I18n>,
    cell({ creationTime }: LogGroup): ReactElement {
      return <>{creationTime}</>;
    },
  },
  {
    id: 'retentionInDays',
    header: <I18n>Retention</I18n>,
    cell({ retentionInDays }: LogGroup): ReactElement {
      return <>{retentionInDays}</>;
    },
  },
  {
    id: 'metricFilterCount',
    header: <I18n>Metric filters</I18n>,
    cell({ metricFilterCount }: LogGroup): ReactElement {
      return <>{metricFilterCount}</>;
    },
  },
  {
    id: 'storedBytes',
    header: <I18n>Stored bytes</I18n>,
    cell({ storedBytes }: LogGroup): ReactElement {
      return <>{storedBytes}</>;
    },
  },
  {
    id: 'kmsKeyId',
    header: <I18n>KMS key ID</I18n>,
    cell({ kmsKeyId }: LogGroup): ReactElement {
      return <>{kmsKeyId}</>;
    },
  },
];

export default function LogGroups(): ReactElement {
  const { breadcrumbs, loadingStep, loadingSteps, resources } = useLogGroups();

  return (
    <AppLayout breadcrumbs={breadcrumbs} toolsHide>
      <ResourcesTable
        columnDefinitions={COLUMN_DEFINITIONS}
        loadingStep={loadingStep}
        loadingSteps={loadingSteps}
        resources={resources}
        trackBy="logGroupName"
      />
    </AppLayout>
  );
}
