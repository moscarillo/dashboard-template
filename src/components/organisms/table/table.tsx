import { useContext } from "react";
import DataContext from "providers/data/context";

import styles from "./table.module.css";

const Table = (): JSX.Element => {
  const { dataApiOne, dataApiTwo, dataApiThree } = useContext(DataContext);
  console.log(dataApiOne, dataApiTwo, dataApiThree);

  if (!dataApiOne || !dataApiTwo || !dataApiThree) {
    return (
      <div className={`animate-pulse ${styles.container}`}>
        <div className=" flex space-x-4 text-white">Loading...</div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.cell}>{dataApiOne.id}</div>
          <div className={`flex-1 ${styles.cell}`}>{dataApiOne.title}</div>
          <div className={styles.cell}>{dataApiOne.completed.toString()}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.cell}>{dataApiTwo.id}</div>
          <div className={`flex-1 ${styles.cell}`}>{dataApiTwo.title}</div>
          <div className={styles.cell}>{dataApiTwo.completed.toString()}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.cell}>{dataApiThree.id}</div>
          <div className={`flex-1 ${styles.cell}`}>{dataApiThree.title}</div>
          <div className={styles.cell}>{dataApiThree.completed.toString()}</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
