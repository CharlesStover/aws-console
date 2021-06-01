import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/home';
import LogGroups from '../../components/log-groups';

export default function Routes(): ReactElement {
  return (
    <Switch>
      <Route component={LogGroups} path="/log-groups" />
      <Route component={Home} />
    </Switch>
  );
}
