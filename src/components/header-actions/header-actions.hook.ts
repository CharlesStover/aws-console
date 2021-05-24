import { CollectionPreferencesProps } from '@awsui/components-react/collection-preferences';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { TranslateFunction, useTranslate } from 'lazy-i18n';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useMemo,
} from 'react';
import useDensity from '../../hooks/use-density';
import useLocale from '../../hooks/use-locale';
import useMode from '../../hooks/use-mode';
import useMotion from '../../hooks/use-motion';
import Preferences from './header-actions.type.preferences';
import customPreference from './header-actions.util.custom-preference';

interface State {
  cancelLabel: string;
  confirmLabel: string;
  customPreference(
    this: void,
    preferences: Preferences,
    setCustomValue: Dispatch<SetStateAction<Preferences>>,
  ): ReactNode;
  handleConfirm(
    this: void,
    event: NonCancelableCustomEvent<
      CollectionPreferencesProps.Preferences<Preferences>
    >,
  ): void;
  preferences: CollectionPreferencesProps.Preferences<Preferences>;
  title: string;
}

export default function useHeaderActions(): State {
  // Contexts
  const [density, setDensity] = useDensity();
  const [locale, setLocale] = useLocale();
  const [mode, setMode] = useMode();
  const [motion, setMotion] = useMotion();
  const translate: TranslateFunction = useTranslate();

  return {
    cancelLabel: translate('Cancel') || '...',
    confirmLabel: translate('Confirm') || '...',
    customPreference,
    title: translate('Preferences') || '...',

    handleConfirm: useCallback(
      (
        e: NonCancelableCustomEvent<
          CollectionPreferencesProps.Preferences<Preferences>
        >,
      ): void => {
        if (typeof e.detail.custom === 'undefined') {
          return;
        }
        const {
          density: newDensity,
          locale: newLocale,
          mode: newMode,
          motion: newMotion,
        } = e.detail.custom;
        if (density !== newDensity) {
          setDensity(newDensity);
        }
        if (locale !== newLocale) {
          setLocale(newLocale);
        }
        if (mode !== newMode) {
          setMode(newMode);
        }
        if (motion !== newMotion) {
          setMotion(newMotion);
        }
      },
      [
        density,
        locale,
        mode,
        motion,
        setDensity,
        setLocale,
        setMode,
        setMotion,
      ],
    ),

    preferences: useMemo(
      (): CollectionPreferencesProps.Preferences<Preferences> => ({
        custom: {
          density,
          locale,
          mode,
          motion,
        },
      }),
      [density, locale, mode, motion],
    ),
  };
}
