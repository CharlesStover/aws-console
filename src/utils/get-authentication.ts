import Authentication from '../types/authentication';
import isRecord from '../utils/is-record';

export default function getAuthentication(): Partial<Authentication> {
  const value: null | string = window.localStorage.getItem('authentication');
  if (value === null) {
    return {};
  }
  try {
    const unknown: unknown = JSON.parse(value);
    if (!isRecord(unknown)) {
      throw new Error('Expected a record.');
    }
    if (!Object.prototype.hasOwnProperty.call(unknown, 'accessKeyId')) {
      throw new Error('Expected an access key ID.');
    }
    if (!Object.prototype.hasOwnProperty.call(unknown, 'secretAccessKey')) {
      throw new Error('Expected a secret access key.');
    }
    if (typeof unknown.accessKeyId !== 'string') {
      throw new Error('Expected access key ID to be a string.');
    }
    if (typeof unknown.secretAccessKey !== 'string') {
      throw new Error('Expected secret access key to be a string.');
    }
    return {
      accessKeyId: unknown.accessKeyId,
      secretAccessKey: unknown.secretAccessKey,
    };
  } catch {
    return {};
  }
}
