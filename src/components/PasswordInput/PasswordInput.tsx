import styles from "./PasswordInput.module.css";
import React, { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { PasswordRequirement } from "@/requirements/PasswordRequirements";
import { Requirement } from "@/components/Requirement";

type PasswordInputProps = {
  requirements: [PasswordRequirement, ...PasswordRequirement[]];
};

export const debounceDelay = 300;

export const PasswordInput = ({ requirements }: PasswordInputProps) => {
  const [password, setPassword] = useState<string>("");
  const debouncedPassword = useDebounce(password, debounceDelay);

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
            isValid={debouncedPassword ? req.check(debouncedPassword) : false}
          />
        ))}
      </ul>
    </div>
  );
};
