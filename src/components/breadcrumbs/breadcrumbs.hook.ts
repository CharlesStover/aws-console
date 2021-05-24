import { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';
import { useBreadcrumbGroup } from 'use-awsui-router';

interface State {
  ariaLabel?: string;
  handleFollow: BreadcrumbGroupProps['onFollow'];
  items: BreadcrumbGroupProps.Item[];
}

const DEFAULT_ITEMS: BreadcrumbGroupProps.Item[] = [
  {
    text: 'Open source AWS console',
    href: '/',
  },
];

export default function useBreadcrumbs(
  breadcrumbs: readonly BreadcrumbGroupProps.Item[],
): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const { handleFollow } = useBreadcrumbGroup();

  return {
    ariaLabel: translate('Breadcrumbs'),
    handleFollow,

    items: useMemo(
      (): BreadcrumbGroupProps.Item[] => [...DEFAULT_ITEMS, ...breadcrumbs],
      [breadcrumbs],
    ),
  };
}
