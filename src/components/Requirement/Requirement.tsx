import styles from "./Requirement.module.css";

type RequirementProps = {
  description: string;
  isValid: boolean;
};

export const Requirement = ({ description, isValid }: RequirementProps) => {
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
