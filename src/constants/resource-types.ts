import RESOURCES from '../constants/resources';
import ResourceType from '../types/resource-type';

// Any string that is a key of `RESOURCES`, which is a
//   `Record<ResourceType, Resource>`, must be a `ResourceType`.
const RESOURCE_TYPES: Set<ResourceType> = new Set(
  Object.keys(RESOURCES) as ResourceType[],
);

export default RESOURCE_TYPES;
