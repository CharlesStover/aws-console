import CollectionPreferences from '@awsui/components-react/collection-preferences';
import SpaceBetween from '@awsui/components-react/space-between';
import { ReactElement } from 'react';
import RegionSelect from '../../components/region-select';
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
    <SpaceBetween direction="horizontal" size="s">
      <RegionSelect />
      <CollectionPreferences
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        customPreference={customPreference}
        onConfirm={handleConfirm}
        preferences={preferences}
        title={title}
      />
    </SpaceBetween>
  );
}
