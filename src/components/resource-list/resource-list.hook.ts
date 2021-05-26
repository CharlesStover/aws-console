import { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import { useMemo } from 'react';
import { useLocation } from 'react-router';
import useResourceTypeText from '../../hooks/use-resource-type-text';
import useResourceTypeTitle from '../../hooks/use-resource-type-title';
import ResourceType from '../../types/resource-type';
import isResourceType from '../../utils/is-resource-type';

interface State {
  breadcrumbs: BreadcrumbGroupProps.Item[];
  resourceTypeText: string;
}

const mapPathnameToResourceType = (pathname: string): ResourceType => {
  const resourceType: string | undefined = pathname.split('/')[1];
  if (!isResourceType(resourceType)) {
    throw new Error(
      `${resourceType} is not a valid resource type in "${pathname}"`,
    );
  }
  return resourceType;
};

export default function useResourceList(): State {
  // Contexts
  const { pathname } = useLocation();
  const resourceType: ResourceType = mapPathnameToResourceType(pathname);

  // States
  const resourceTypeText: string = useResourceTypeText(resourceType);
  const resourceTypeTitle: string = useResourceTypeTitle(resourceType);

  return {
    resourceTypeText,

    breadcrumbs: useMemo(
      (): BreadcrumbGroupProps.Item[] => [
        {
          href: `/${resourceType}`,
          text: resourceTypeTitle,
        },
      ],
      [resourceType, resourceTypeTitle],
    ),
  };
}
