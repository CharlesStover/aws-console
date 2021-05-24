import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import LogGroups from '../../components/log-groups';

export default function Routes(): ReactElement {
  return (
    <Switch>
      <Route component={LogGroups} path="/log-groups" />
      <Route render={(): string => 'Home'} />
    </Switch>
  );
}
