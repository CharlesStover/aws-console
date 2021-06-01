import { createContext } from 'react';
import Region from '../constants/region';

export default createContext<[Region, (region: Region) => void] | null>(null);
