import { AppLayoutProps } from '@awsui/components-react/app-layout';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import { MutableRefObject, useLayoutEffect, useMemo, useRef } from 'react';
import { useAppLayout as useAwsuiAppLayout } from 'use-awsui';

interface Props {
  controlledToolsOpen?: boolean;
  onToolsChange?(
    event: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail>,
  ): void;
}

interface State {
  ariaLabels: AppLayoutProps.Labels;
  navigationOpen?: boolean;
  ref: MutableRefObject<HTMLDivElement | null>;
  toolsOpen?: boolean;
  handleNavigationChange(
    this: void,
    event: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail>,
  ): void;
  handleToolsChange(
    this: void,
    event: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail>,
  ): void;
}

export default function useAppLayout({
  controlledToolsOpen,
  onToolsChange,
}: Props): State {
  // Contexts
  const translate: TranslateFunction = useTranslate();

  // States
  const {
    handleNavigationChange,
    handleToolsChange,
    navigationOpen,
    toolsOpen,
  } = useAwsuiAppLayout({
    defaultNavigationOpen: false,
    defaultToolsOpen: false,
  });

  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  // Effects
  useLayoutEffect((): void => {
    if (ref.current === null) {
      return;
    }
    ref.current.scrollIntoView();
  }, []);

  return {
    handleNavigationChange,
    navigationOpen,
    ref,

    ariaLabels: useMemo(
      (): AppLayoutProps.Labels => ({
        navigation: translate('Navigation'),
        navigationToggle: translate('Toggle navigation'),
        navigationClose: translate('Close navigation'),
        notifications: translate('Notifications'),
        tools: translate('Tools'),
        toolsToggle: translate('Toggle tools'),
        toolsClose: translate('Close tools'),
      }),
      [translate],
    ),

    handleToolsChange:
      typeof onToolsChange === 'function' ? onToolsChange : handleToolsChange,

    toolsOpen:
      typeof controlledToolsOpen === 'boolean'
        ? controlledToolsOpen
        : toolsOpen,
  };
}
