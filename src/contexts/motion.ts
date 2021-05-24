import { createContext } from 'react';

export default createContext<[boolean, (motion: boolean) => void] | null>(null);
