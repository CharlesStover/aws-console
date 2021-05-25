import Client from '../types/client';
import ClientName from '../types/client-name';

/*
The following keys should be omitted, but it results in failure to return
  correct keys.

Omit<
  keyof Client<C>,
  | 'apiVersions'
  | 'config'
  | 'defineService'
  | 'endpoint'
  | 'makeRequest'
  | 'makeUnauthenticatedRequest'
  | 'setupRequestListeners'
  | 'waitFor'
>;
*/
type MethodName<C extends ClientName> = keyof Client<C>;

export default MethodName;
