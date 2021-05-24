import { Density, Mode } from '@awsui/global-styles';

export default interface AppProps {
  accessKeyId?: string;
  density: Density;
  mode: Mode;
  motion: boolean;
  onAccessKeyIdChange(accessKeyId?: string): void;
  onDensityChange(density: Density): void;
  onModeChange(mode: Mode): void;
  onMotionChange(motion: boolean): void;
  onSecretAccessKeyChange(secretAccessKey?: string): void;
  secretAccessKey?: string;
}
