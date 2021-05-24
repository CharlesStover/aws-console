import { Density, Mode } from '@awsui/global-styles';

export default interface AppProps {
  accessKeyId?: string;
  density: Density;
  mode: Mode;
  motion: boolean;
  onAuthentication(
    accessKeyId: string,
    secretAccessKey: string,
    remember: boolean,
  ): void;
  onDensityChange(density: Density): void;
  onModeChange(mode: Mode): void;
  onMotionChange(motion: boolean): void;
  secretAccessKey?: string;
}
