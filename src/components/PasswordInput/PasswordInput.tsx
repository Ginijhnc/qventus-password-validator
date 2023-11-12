import styles from "./PasswordInput.module.css";
import React, { useState } from "react";
import { PasswordRequirement } from "@/requirements/PasswordRequirements";

type RequirementProps = {
  description: string;
  isValid: boolean;
};

const Requirement = ({ description, isValid }: RequirementProps) => {
  const indicatorStatus = isValid ? styles.success : styles.error;

  return (
    <li className={styles.requirement}>
      <span
        data-testid={`validation-${description}`}
        className={`${styles.requirementIndicator} ${indicatorStatus}`}
      >
        {isValid ? "✔" : "X"}
      </span>
      <span>{description}</span>
    </li>
  );
};

type PasswordInputProps = {
  requirements: PasswordRequirement[];
};

export const PasswordInput = ({ requirements }: PasswordInputProps) => {
  const [password, setPassword] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.passwordInputWrapper}>
      <div className={styles.inputContainer}>
        <input
          placeholder="Enter your password"
          data-testid="password-input"
          className={styles.input}
          value={password}
          onChange={handleChange}
          // type='password'
        />
      </div>
      <ul className={styles.requirementsContainer}>
        {requirements.map((req) => (
          <Requirement
            key={req.name}
            description={req.description}
            isValid={req.check(password)}
          />
        ))}
      </ul>
    </div>
  );
};
