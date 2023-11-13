import styles from "./App.module.css";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import { reqs } from "@/requirements/PasswordRequirements";

export const App = () => {
  return (
    <main className={styles.container}>
      <h1>Qventus Challenge</h1>
      <span>Password Validator</span>
      <PasswordInput
        requirements={[
          reqs.hasSpecialChar,
          reqs.hasNumber,
          reqs.hasUppercaseLetter,
          reqs.hasNoConsecutiveLetters,
        ]}
      />
    </main>
  );
};
