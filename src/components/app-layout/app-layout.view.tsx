import AppLayout, { AppLayoutProps } from '@awsui/components-react/app-layout';
import { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';
import { FlashbarProps } from '@awsui/components-react/flashbar';
import { ComponentType, ReactElement, ReactNode } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import Notifications from '../../components/notifications';
import useAppLayout from './app-layout.hook';

interface Props {
  Tools?: ComponentType<unknown>;
  breadcrumbs?: BreadcrumbGroupProps.Item[];
  children: ReactNode;
  contentType?: AppLayoutProps.ContentType;
  hideBreadcrumbs?: boolean;
  navigationHide?: boolean;
  notifications?: FlashbarProps.MessageDefinition[];
  onToolsChange?: AppLayoutProps['onToolsChange'];
  toolsHide?: boolean;
  toolsOpen?: boolean;
}

export default function CustomAppLayout({
  Tools,
  breadcrumbs,
  children,
  contentType,
  hideBreadcrumbs = false,
  navigationHide,
  notifications,
  onToolsChange,
  toolsHide,
  toolsOpen: controlledToolsOpen,
}: Props): ReactElement {
  const {
    ariaLabels,
    handleNavigationChange,
    handleToolsChange,
    navigationOpen,
    ref,
    toolsOpen,
  } = useAppLayout({
    controlledToolsOpen,
    onToolsChange,
  });

  return (
    <div ref={ref}>
      <AppLayout
        ariaLabels={ariaLabels}
        breadcrumbs={
          !hideBreadcrumbs && <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
        }
        content={children}
        contentType={contentType}
        navigation={<Navigation />}
        navigationOpen={navigationOpen}
        navigationHide={navigationHide}
        notifications={
          <>
            <Notifications>{notifications}</Notifications>
            <Header />
          </>
        }
        onNavigationChange={handleNavigationChange}
        onToolsChange={handleToolsChange}
        tools={Tools && <Tools />}
        toolsHide={toolsHide}
        toolsOpen={toolsOpen}
      />
    </div>
  );
}
