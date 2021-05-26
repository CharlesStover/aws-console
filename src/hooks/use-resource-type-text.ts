import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { useMemo } from 'react';
import ResourceType from '../types/resource-type';

export default function useResourceTypeText(
  resourceType: ResourceType,
): string {
  const translate: TranslateFunction = useTranslate();

  const title: string | undefined = useMemo((): string | undefined => {
    switch (resourceType) {
      case 'log-groups':
        return translate('log groups');
    }
  }, [resourceType, translate]);

  return title || '...';
}
