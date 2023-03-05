import { useState, useEffect } from "react";
import DataContext from "./context";
import {
  DATA_API_ONE_URL,
  DATA_API_TWO_URL,
  DATA_API_THREE_URL,
} from "./constants";
import type { ReactNode } from "react";
import type { DataAll } from "./data";

export type Props = {
  children: ReactNode;
};

export const DataProvider = (props: Props) => {
  const { children } = props;
  const [data, setData] = useState<DataAll>({} as DataAll);

  useEffect(() => {
    const fetchAllData = async () => {
      const [dataApiOne, dataApiTwo, dataApiThree] = await Promise.all([
        fetch(DATA_API_ONE_URL).then((response) => response.json()),
        fetch(DATA_API_TWO_URL).then((response) => response.json()),
        fetch(DATA_API_THREE_URL).then((response) => response.json()),
      ]);
      setData({ dataApiOne, dataApiTwo, dataApiThree });
    };
    fetchAllData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
