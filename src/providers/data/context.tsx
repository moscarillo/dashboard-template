import { createContext } from 'react';

import type { DataAll } from './data';

const defaultDataAll = {
  dataApiOne: null,
  dataApiTwo: null,
  dataApiThree: null,
} as DataAll;

const DataContext = createContext(defaultDataAll);

export default DataContext;
