import { SideNavigationProps } from '@awsui/components-react/side-navigation';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';

export default function useItems(): SideNavigationProps.Item[] {
  const translate: TranslateFunction = useTranslate();

  return useMemo(
    (): SideNavigationProps.Item[] => [
      {
        href: '/',
        text: translate('Home') || '...',
        type: 'link',
      },
      {
        type: 'divider',
      },
      {
        href: '/log-groups',
        text: translate('Log groups') || '...',
        type: 'link',
      },
    ],
    [translate],
  );
}
