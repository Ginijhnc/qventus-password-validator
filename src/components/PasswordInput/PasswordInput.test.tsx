import { describe, it, expect } from "vitest";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { PasswordInput, debounceDelay } from "./PasswordInput";
import { reqs } from "@/requirements/PasswordRequirements";

const testRequirement = async (
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

  await waitFor(
    () => {
      const validationIndicator = screen.getByTestId(
        `validation-${description}`
      );
      expect(validationIndicator.textContent).to.include(expectedIndicator);
    },
    { timeout: debounceDelay + 100 }
  );
};

describe("PasswordInput regex validation tests", () => {
  it("should render a ✔ if the password contains a special character", async () => {
    await testRequirement("justap@ssword", "Has a special char !@#$%^&*", "✔");
  });

  it("should render an X if the password doesnt contain a special character", async () => {
    await testRequirement("justapassword", "Has a special char !@#$%^&*", "X");
  });

  it("should render a ✔ if the password contains a number", async () => {
    await testRequirement("JustaP4ssword", "Has a number 0-9", "✔");
  });

  it("should render an X if the password doesnt contain any number", async () => {
    await testRequirement("JustaPassword", "Has a number 0-9", "X");
  });

  it("should render a ✔ if the password contains an uppercase letter", async () => {
    await testRequirement("JustaPassword", "Has an uppercase letter", "✔");
  });

  it("should render an X if the password doesnt contain an uppercase letter", async () => {
    await testRequirement("justapassword", "Has an uppercase letter", "X");
  });
});
