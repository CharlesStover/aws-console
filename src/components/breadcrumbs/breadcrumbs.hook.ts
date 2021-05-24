import { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';
import { useBreadcrumbGroup } from 'use-awsui-router';

interface State {
  ariaLabel?: string;
  handleFollow: BreadcrumbGroupProps['onFollow'];
  items: BreadcrumbGroupProps.Item[];
}

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
      (): BreadcrumbGroupProps.Item[] => [
        {
          text: translate('Home') || '...',
          href: '/',
        },
        ...breadcrumbs,
      ],
      [breadcrumbs, translate],
    ),
  };
}
