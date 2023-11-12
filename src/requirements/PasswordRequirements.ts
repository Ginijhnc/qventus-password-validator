export type PasswordRequirement = {
  name: string;
  description: string;
  check: (password: string) => boolean;
};

const hasSpecialChar: PasswordRequirement = {
  name: "hasSpecialChar",
  description: "Has a special char !@#$%^&*",
  check: (password: string) => /[!@#$%^&*]/.test(password),
};

const hasNumber: PasswordRequirement = {
  name: "hasNumber",
  description: "Has a number 0-9",
  check: (password: string) => /\d/.test(password),
};

const hasUppercaseLetter: PasswordRequirement = {
  name: "hasUppercaseLetter",
  description: "Has an uppercase letter",
  check: (password: string) => /[A-Z]/.test(password),
};

export const reqs = {
  hasSpecialChar,
  hasNumber,
  hasUppercaseLetter,
} as const;
