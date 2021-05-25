import ClientName from '../types/client-name';
import MethodName from '../types/method-name';

export default interface ResourceList<
  C extends ClientName,
  M extends MethodName<C>,
  Params,
> {
  client: C;
  method: M;
  label: string;
  token?: keyof Params;
}
