import { useState, useEffect } from 'react';
import DataContext from './context';

import type { ReactNode } from 'react';
import type { DataAll } from './data';

export type Props = {
  children: ReactNode;
};

export const DataProvider = (props: Props) => {
  const { children } = props;
  const [data, setData] = useState<DataAll>({} as DataAll);

  useEffect(() => {
    const fetchAllData = async () => {
      const [dataApiOne, dataApiTwo, dataApiThree] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()),
        fetch('https://jsonplaceholder.typicode.com/todos/2').then((response) => response.json()),
        fetch('https://jsonplaceholder.typicode.com/todos/3').then((response) => response.json()),
      ]);
      setData({ dataApiOne, dataApiTwo, dataApiThree });
    };
    fetchAllData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
