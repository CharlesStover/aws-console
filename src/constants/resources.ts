import { DescribeLogGroupsRequest } from 'aws-sdk/clients/cloudwatchlogs';
import Resource from '../types/resource';
import ResourceType from '../types/resource-type';

const logGroupViewQueryRequestInputParam: keyof DescribeLogGroupsRequest =
  'logGroupNamePrefix';

const logGroupViewQueryRequest: Partial<DescribeLogGroupsRequest> = {
  limit: 1,
};

const RESOURCES: Record<ResourceType, Resource> = {
  'log-groups': {
    list: {
      query: [
        {
          client: 'CloudWatchLogs',
          key: 'logGroups',
          method: 'describeLogGroups',
          token: 'nextToken',
        },
      ],
    },
    view: {
      query: [
        {
          client: 'CloudWatchLogs',
          key: ['logGroups', 0],
          method: 'describeLogGroups',
          requestInputParam: logGroupViewQueryRequestInputParam,
          request: logGroupViewQueryRequest,
        },
      ],
    },
  },
};

export default RESOURCES;
