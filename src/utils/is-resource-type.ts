import RESOURCE_TYPES from '../constants/resource-types';
import ResourceType from '../types/resource-type';

export default function isResourceType(value: unknown): value is ResourceType {
  return RESOURCE_TYPES.has(value as ResourceType);
}
