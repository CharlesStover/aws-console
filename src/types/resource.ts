import ResourceList from '../types/resource-list';
import ResourceView from '../types/resource-view';

export default interface Resource {
  list: ResourceList;
  view: ResourceView;
}
