import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/home';
import ResourceList from '../../components/resource-list';
import RESOURCE_TYPES from '../../constants/resource-types';
import ResourceType from '../../types/resource-type';

const mapResourceTypeToRoutes = (resourceType: ResourceType): ReactElement => {
  return (
    <Route
      component={ResourceList}
      key={resourceType}
      path={`/${resourceType}`}
    />
  );
};

export default function Routes(): ReactElement {
  return (
    <Switch>
      {[...RESOURCE_TYPES].map(mapResourceTypeToRoutes)}
      <Route component={Home} />
    </Switch>
  );
}
