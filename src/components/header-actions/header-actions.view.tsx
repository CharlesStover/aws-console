import CollectionPreferences from '@awsui/components-react/collection-preferences';
import { ReactElement } from 'react';
import useHeaderActions from './header-actions.hook';

export default function HeaderActions(): ReactElement {
  const {
    cancelLabel,
    confirmLabel,
    customPreference,
    handleConfirm,
    preferences,
    title,
  } = useHeaderActions();

  return (
    <CollectionPreferences
      cancelLabel={cancelLabel}
      confirmLabel={confirmLabel}
      customPreference={customPreference}
      onConfirm={handleConfirm}
      preferences={preferences}
      title={title}
    />
  );
}
