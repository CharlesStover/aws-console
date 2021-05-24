import {
  Density,
  Mode,
  applyDensity,
  applyMode,
  disableMotion,
} from '@awsui/global-styles';
import { render } from 'react-dom';
import App from './components/app';
import root from './constants/root';
import AppProps from './types/app-props';
import './utils/report-web-vitals';

interface Options {
  accessKeyId?: string;
  defaultDensity: Density;
  defaultMode: Mode;
  defaultMotion: boolean;
  secretAccessKey?: string;
}

const DEFAULT_DENSITY: Density = Density.Comfortable;
const DEFAULT_MODE: Mode = Mode.Dark;
const DEFAULT_MOTION = true;

class Application {
  private _accessKeyId: string | undefined;
  private _density: Density = DEFAULT_DENSITY;
  private _mode: Mode = DEFAULT_MODE;
  private _motion: boolean = DEFAULT_MOTION;
  private _secretAccessKey: string | undefined;

  public constructor({
    accessKeyId,
    defaultDensity = DEFAULT_DENSITY,
    defaultMode = DEFAULT_MODE,
    defaultMotion = DEFAULT_MOTION,
    secretAccessKey,
  }: Options) {
    this._accessKeyId = accessKeyId;
    this._secretAccessKey = secretAccessKey;
    this.render = this.render.bind(this);

    this.applyDensity(defaultDensity);
    this.applyMode(defaultMode);
    this.applyMotion(defaultMotion);
    this.render();
  }

  private applyDensity(density: Density): void {
    this._density = density;
    applyDensity(density, document.body);
  }

  private applyMode(mode: Mode): void {
    this._mode = mode;
    applyMode(mode, document.body);
  }

  private applyMotion(motion: boolean): void {
    this._motion = motion;
    disableMotion(!motion);
  }

  private get props(): AppProps {
    return {
      accessKeyId: this._accessKeyId,
      density: this._density,
      mode: this._mode,
      motion: this._motion,
      onAccessKeyIdChange: this.setAccessKeyId.bind(this),
      onDensityChange: this.setDensity.bind(this),
      onModeChange: this.setMode.bind(this),
      onMotionChange: this.setMotion.bind(this),
      onSecretAccessKeyChange: this.setSecretAccessKey.bind(this),
      secretAccessKey: this._secretAccessKey,
    };
  }

  public setAccessKeyId(accessKeyId?: string): void {
    this._accessKeyId = accessKeyId;
    this.render();
  }

  public setDensity(density: Density): void {
    this.applyDensity(density);
    this.render();
  }

  public setMode(mode: Mode): void {
    this.applyMode(mode);
    this.render();
  }

  public setMotion(motion: boolean): void {
    this.applyMotion(motion);
    this.render();
  }

  public setSecretAccessKey(accessKeyId?: string): void {
    this._secretAccessKey = accessKeyId;
    this.render();
  }

  public render(): void {
    render(<App {...this.props} />, root);
  }
}

new Application({
  defaultDensity: DEFAULT_DENSITY,
  defaultMode: DEFAULT_MODE,
  defaultMotion: DEFAULT_MOTION,
});
