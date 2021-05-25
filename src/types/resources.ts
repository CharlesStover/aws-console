import { DescribeLogGroupsRequest } from 'aws-sdk/clients/cloudwatchlogs';
import Resource from '../types/resource';

export default interface Resources {
  'log-group': Resource<
    'CloudWatchLogs',
    'describeLogGroups',
    DescribeLogGroupsRequest,
    'CloudWatchLogs',
    'describeLogGroups',
    DescribeLogGroupsRequest
  >;
}
