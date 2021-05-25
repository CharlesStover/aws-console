import ClientName from '../types/client-name';
import ClientsRecord from '../types/clients-record';

type Client<C extends ClientName> = ClientsRecord[C]['prototype'];

export default Client;
