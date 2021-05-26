import ClientName from '../types/client-name';

export default interface ResourceQuery {
  client: ClientName;
  key?: string | (number | string)[];
  method: string;
  request?: Record<string, unknown>;
  requestInputParam?: string;
  token?: string;
}
