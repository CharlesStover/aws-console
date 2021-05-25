import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/home';
import ResourceList from '../../components/resource-list';
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

type ResourcesEntry = [keyof Resources, AnyResource];

const resourcesEntries: ResourcesEntry[] = Object.entries(
  RESOURCES,
) as ResourcesEntry[];

const mapResourcesEntryToRoutes = ([
  path,
  resource,
]: ResourcesEntry): ReactElement => {
  return (
    <Route
      component={ResourceList}
      key={path}
      path={`/${resource.list.label}`}
    />
  );
};

export default function Routes(): ReactElement {
  return (
    <Switch>
      {resourcesEntries.map(mapResourcesEntryToRoutes)}
      <Route component={Home} />
    </Switch>
  );
}
