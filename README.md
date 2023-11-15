# Qventus Challenge - Password Validator

#### Instructions to start the application:

```
git clone https://github.com/Ginijhnc/qventus-password-validator.git
cd qventus-password-validator
npm i
npm run dev
```

#### Run tests:

```
npm run test
```

### Description

This is a challenge made for the company [Qventus, Inc](https://linkedin.com/company/qventus-inc). The assignment was to create a password input that could accept custom validation requirements through props, with a focus on reusability and maintainability.

The most important component is the PasswordInput which accepts a prop called requirements, for example:

```js
<PasswordInput
  requirements={[
    reqs.hasSpecialChar,
    reqs.hasNumber,
    reqs.hasUppercaseLetter,
    reqs.hasNoConsecutiveLetters,
  ]}
/>
```

This prop is designed to be an array of objects, where each object represents a specific validation rule for the password. Using the reqs object, you can leverage TypeScript's autocomplete feature to streamline the development process and reduce potential errors.

#### Possible improvements

Another part of the challenge was to mention what improvements I could make to my project. Here are some of them:

1. Implementing a validation for the requirements prop to prevent duplicated requirement names, e.g the "reqs.hasNumber" being used twice in the same PasswordInput.
2. Utilizing React's [useId hook](https://react.dev/reference/react/useId) and aria-describedby to improve the accesibility of the input.
3. Improving the typing of the test file PasswordInput.test.tsx so you can autocomplete the requirements instead of having to copy strings like "Has no consecutive letters". This would make it easier to add more tests for new validation rules/requirements in the future and make it less prone to errors.
