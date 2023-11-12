import styles from "./App.module.css";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";

export const App = () => {
  return (
    <main className={styles.container}>
      <h1 data-testid="home-heading">Qventus Challenge</h1>
      <PasswordInput />
    </main>
  );
};
