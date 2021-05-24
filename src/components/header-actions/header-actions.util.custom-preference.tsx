import FormField from '@awsui/components-react/form-field';
import SpaceBetween from '@awsui/components-react/space-between';
import { Density, Mode } from '@awsui/global-styles';
import I18n from 'lazy-i18n';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import DensitySelect from '../../components/density-select';
import LocaleSelect from '../../components/locale-select';
import ModeSelect from '../../components/mode-select';
import MotionCheckbox from '../../components/motion-checkbox';
import Locale from '../../constants/locale';
import Preferences from './header-actions.type.preferences';

export default function headerActionsCustomPreference(
  this: void,
  preferences: Preferences,
  setCustomValue: Dispatch<SetStateAction<Preferences>>,
): ReactNode {
  const handleDensityChange = (newDensity: Density): void => {
    setCustomValue({
      ...preferences,
      density: newDensity,
    });
  };

  const handleLocaleChange = (newLocale: Locale): void => {
    setCustomValue({
      ...preferences,
      locale: newLocale,
    });
  };

  const handleModeChange = (newMode: Mode): void => {
    setCustomValue({
      ...preferences,
      mode: newMode,
    });
  };

  const handleMotionChange = (newMotion: boolean): void => {
    setCustomValue({
      ...preferences,
      motion: newMotion,
    });
  };

  return (
    <SpaceBetween direction="vertical" size="m">
      <FormField label={<I18n>Density</I18n>}>
        <DensitySelect
          onChange={handleDensityChange}
          value={preferences.density}
        />
      </FormField>
      <FormField label={<I18n>Locale</I18n>}>
        <LocaleSelect
          onChange={handleLocaleChange}
          value={preferences.locale}
        />
      </FormField>
      <FormField label={<I18n>Mode</I18n>}>
        <ModeSelect onChange={handleModeChange} value={preferences.mode} />
      </FormField>
      <MotionCheckbox
        onChange={handleMotionChange}
        value={preferences.motion}
      />
    </SpaceBetween>
  );
}
