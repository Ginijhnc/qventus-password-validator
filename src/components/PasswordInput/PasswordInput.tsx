import styles from "./PasswordInput.module.css";

const Requirement = () => {
  return (
    <li className={styles.requirement}>
      <span className={styles.requirementIndicator}>✔</span>
      <span>requirement</span>
    </li>
  );
};

export const PasswordInput = () => {
  return (
    <div className={styles.passwordInputWrapper}>
      <div className={styles.inputContainer}>
        <input placeholder="Enter your password" className={styles.input} />
      </div>
      <ul className={styles.requirementsContainer}>
        <Requirement />
        <Requirement />
        <Requirement />
      </ul>
    </div>
  );
};
