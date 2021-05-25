import { DescribeLogGroupsRequest } from 'aws-sdk/clients/cloudwatchlogs';
import Resources from '../types/resources';

const RESOURCES: Resources = {
  'log-group': {
    list: {
      client: 'CloudWatchLogs',
      label: 'log-groups',
      method: 'describeLogGroups',
      token: 'nextToken',
    },
    view: {
      client: 'CloudWatchLogs',
      method: 'describeLogGroups',
      request(id: string): DescribeLogGroupsRequest {
        return {
          limit: 1,
          logGroupNamePrefix: id,
        };
      },
    },
  },
};

export default RESOURCES;
