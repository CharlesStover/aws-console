import CloudWatchLogs from 'aws-sdk/clients/cloudwatchlogs';
import useAwsSdk from '../hooks/use-aws-sdk';

export default function useCloudWatchLogs(): CloudWatchLogs {
  return useAwsSdk(CloudWatchLogs);
}
