import { createContext } from 'react';
import Authentication from '../types/authentication';

export default createContext<Authentication | null>(null);
