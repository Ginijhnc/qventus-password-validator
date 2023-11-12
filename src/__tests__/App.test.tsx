import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "@/App";

describe("App", () => {
  it("renders the home heading", () => {
    render(<App />);
    const headingElement = screen.getByTestId("home-heading");
    expect(headingElement).toBeInTheDocument();
  });
});
