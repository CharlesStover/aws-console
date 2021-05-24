import { Density, Mode } from '@awsui/global-styles';
import Locale from '../../constants/locale';

export default interface HeaderActionsPreferences {
  density: Density;
  locale: Locale;
  mode: Mode;
  motion: boolean;
}
