import RESOURCES from '../constants/resources';
import Resource from '../types/resource';
import ResourceType from '../types/resource-type';

const RESOURCES_ENTRIES: [ResourceType, Resource][] = Object.entries(
  RESOURCES,
) as [ResourceType, Resource][];

export default RESOURCES_ENTRIES;
