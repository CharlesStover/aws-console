import ClientName from '../types/client-name';
import MethodName from '../types/method-name';

/*
TODO: Params should be inferred from Client<C>[M], but instead of inferring
  `(params: infer Params, callback?: unknown) => unknown`, Params is inferred
  by the alternate definition `(callback?: infer Params) => unknown`.
*/

export default interface ResourceView<
  C extends ClientName,
  M extends MethodName<C>,
  Params,
> {
  client: C;
  method: M;
  request(id: string): Params;
}
