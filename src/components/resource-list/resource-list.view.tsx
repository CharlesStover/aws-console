import { ReactElement } from 'react';
import { useLocation } from 'react-router';
import AppLayout from '../../components/app-layout';
import RESOURCES from '../../constants/resources';
import ClientName from '../../types/client-name';
import MethodName from '../../types/method-name';
import Resource from '../../types/resource';
import Resources from '../../types/resources';

type AnyResource = Resource<
  ClientName,
  MethodName<ClientName>,
  unknown,
  ClientName,
  MethodName<ClientName>,
  unknown
>;

const mapPathnameToResourceType = (pathname: string): keyof Resources => {
  for (const [resourceType, resource] of Object.entries(RESOURCES) as [
    keyof Resources,
    AnyResource,
  ][]) {
    if (`/${resource.list.label}` === pathname) {
      return resourceType;
    }
  }
  throw new Error('x');
};

export default function ResourceList(): ReactElement {
  const { pathname } = useLocation();

  const resourceType: keyof Resources = mapPathnameToResourceType(pathname);

  // usePath() => 'log-groups'
  // switch (path) => breadcrumbs, text
  return <AppLayout>{resourceType}</AppLayout>;
}
