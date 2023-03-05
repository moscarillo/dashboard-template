import { DataProvider } from "providers";
import Table from "components/organisms/table";
import styles from "./app.module.css";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <header className={styles.header}></header>
      <DataProvider>
        <Table />
      </DataProvider>
      <footer className={styles.footer}></footer>
    </main>
  );
};

export default App;
