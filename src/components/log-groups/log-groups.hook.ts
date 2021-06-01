import { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import CloudWatchLogs, {
  DescribeLogGroupsResponse,
  LogGroup,
} from 'aws-sdk/clients/cloudwatchlogs';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import useCloudWatchLogs from '../../hooks/use-cloudwatch-logs';
import useRegion from '../../hooks/use-region';

interface State {
  breadcrumbs: BreadcrumbGroupProps.Item[];
  loadingStep: number;
  loadingSteps: number;
  resources: readonly LogGroup[];
}

export default function useLogGroups(): State {
  // Contexts
  const cloudWatchLogs: CloudWatchLogs = useCloudWatchLogs();
  const [region] = useRegion();
  const translate: TranslateFunction = useTranslate();

  const { data } = useQuery(
    ['log-groups', region],
    async (): Promise<DescribeLogGroupsResponse> => {
      return await cloudWatchLogs.describeLogGroups().promise();
    },
  );

  return {
    loadingStep: data?.logGroups ? 2 : 1,
    loadingSteps: 1,
    resources: data?.logGroups || [],

    breadcrumbs: useMemo(
      (): BreadcrumbGroupProps.Item[] => [
        {
          href: '/log-groups',
          text: translate('Log groups') || '...',
        },
      ],
      [translate],
    ),
  };
}
