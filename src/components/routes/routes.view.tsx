import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Alarms from '../../components/alarms';
import Home from '../../components/home';
import LogGroups from '../../components/log-groups';
import Roles from '../../components/roles';
import Users from '../../components/users';

export default function Routes(): ReactElement {
  return (
    <Switch>
      <Route component={Alarms} path="/alarms" />
      <Route component={LogGroups} path="/log-groups" />
      <Route component={Roles} path="/roles" />
      <Route component={Users} path="/users" />
      <Route component={Home} />
    </Switch>
  );
}
