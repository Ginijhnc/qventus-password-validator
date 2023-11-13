/* 
  this validation has its own file because the goal was to show how the PasswordRequirements.ts
  could use an external function. This will be helpful if some day there's a reusable validation 
  requirement that is too long to leave it in the PasswordRequirements.ts "check" property.
*/

export const validateNoConsecutiveLetters = (password: string): boolean => {
  return !/[a-zA-Z][a-zA-Z]/.test(password);
};
