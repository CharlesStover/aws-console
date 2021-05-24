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
import getAuthentication from './utils/get-authentication';
import './utils/report-web-vitals';
import setAuthentication from './utils/set-authentication';

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

  private applyAuthentication(
    accessKeyId: string,
    secretAccessKey: string,
    remember: boolean,
  ): void {
    this._accessKeyId = accessKeyId;
    this._secretAccessKey = secretAccessKey;
    if (remember) {
      setAuthentication({
        accessKeyId,
        secretAccessKey,
      });
    }
  }

  private get props(): AppProps {
    return {
      accessKeyId: this._accessKeyId,
      density: this._density,
      mode: this._mode,
      motion: this._motion,
      onAuthentication: this.setAuthentication.bind(this),
      onDensityChange: this.setDensity.bind(this),
      onModeChange: this.setMode.bind(this),
      onMotionChange: this.setMotion.bind(this),
      secretAccessKey: this._secretAccessKey,
    };
  }

  public setAuthentication(
    accessKeyId: string,
    secretAccessKey: string,
    remember: boolean,
  ): void {
    this.applyAuthentication(accessKeyId, secretAccessKey, remember);
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

  public render(): void {
    render(<App {...this.props} />, root);
  }
}

new Application({
  ...getAuthentication(),
  defaultDensity: DEFAULT_DENSITY,
  defaultMode: DEFAULT_MODE,
  defaultMotion: DEFAULT_MOTION,
});
