import ClientName from '../types/client-name';
import MethodName from '../types/method-name';
import ResourceList from '../types/resource-list';
import ResourceView from '../types/resource-view';

export default interface Resource<
  ListClientName extends ClientName,
  ListMethodName extends MethodName<ListClientName>,
  ListMethodParams,
  ViewClientName extends ClientName,
  ViewMethodName extends MethodName<ViewClientName>,
  ViewMethodParams,
> {
  list: ResourceList<ListClientName, ListMethodName, ListMethodParams>;
  view: ResourceView<ViewClientName, ViewMethodName, ViewMethodParams>;
}
