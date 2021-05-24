import Authentication from '../types/authentication';

export default function setAuthentication(
  authentication: Authentication,
): void {
  window.localStorage.setItem('authentication', JSON.stringify(authentication));
}
