import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { PasswordInput } from "./PasswordInput";
import { reqs } from "@/requirements/PasswordRequirements";

const testRequirement = (
  inputValue: string,
  description: string,
  expectedIndicator: string
) => {
  render(
    <PasswordInput
      requirements={[
        reqs.hasSpecialChar,
        reqs.hasNumber,
        reqs.hasUppercaseLetter,
      ]}
    />
  );
  const input = screen.getByTestId("password-input");
  fireEvent.change(input, { target: { value: inputValue } });

  const validationIndicator = screen.getByTestId(`validation-${description}`);
  expect(validationIndicator.textContent).to.include(expectedIndicator);
};

describe("PasswordInput regex validation tests", () => {
  it("should render a ✔ if the password contains a special character", () => {
    testRequirement("justap@ssword", "Has a special char !@#$%^&*", "✔");
  });

  it("should render an X if the password doesnt contain a special character", () => {
    testRequirement("justapassword", "Has a special char !@#$%^&*", "X");
  });

  it("should render a ✔ if the password contains a number", () => {
    testRequirement("JustaP4ssword", "Has a number 0-9", "✔");
  });

  it("should render an X if the password doesnt contain any number", () => {
    testRequirement("JustaPassword", "Has a number 0-9", "X");
  });

  it("should render a ✔ if the password contains an uppercase letter", () => {
    testRequirement("JustaPassword", "Has an uppercase letter", "✔");
  });

  it("should render an X if the password doesnt contain an uppercase letter", () => {
    testRequirement("justapasword", "Has an uppercase letter", "X");
  });
});
