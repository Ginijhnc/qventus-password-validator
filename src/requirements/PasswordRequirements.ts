export type PasswordRequirement = {
  id: number;
  description: string;
  check: (password: string) => boolean;
};

export const PasswordRequirements: PasswordRequirement[] = [
  {
    id: 1,
    description: "Has a special char !@#$%^&*",
    check: (password: string) => /[!@#$%^&*]/.test(password),
  },
  {
    id: 2,
    description: "Has a number 0-9",
    check: (password: string) => /\d/.test(password),
  },
  {
    id: 3,
    description: "Has an uppercase letter",
    check: (password: string) => /[A-Z]/.test(password),
  },
];
