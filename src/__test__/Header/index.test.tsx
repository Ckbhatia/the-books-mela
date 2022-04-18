import { screen } from "@testing-library/react";
import { render } from "../../utils/test-utils";
import Header from "../../Components/Header";

describe("Header", () => {
  it("Render Header", () => {
    render(<Header />);
    expect(screen.getByText(/The books mela/i).textContent).toBe(
      "The books mela"
    );
  });

  it("Log out button should be available", () => {
    render(<Header />);
    expect(
      screen.getByRole("button", { name: /Log out/i })
    ).toBeInTheDocument();
  });
});
