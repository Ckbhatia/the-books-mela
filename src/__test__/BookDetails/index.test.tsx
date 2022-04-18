import { screen } from "@testing-library/react";
import { render } from "../../utils/test-utils";
import BookDetails from "../../Pages/BookDetails";

describe("Book details page", () => {
  it("Render Book details", () => {
    render(<BookDetails />);
    expect(screen.getByTestId(/book-details-page/i)).toBeInTheDocument();
  });

  it("Book details should be available", () => {
    render(<BookDetails isTestMode />);
    expect(screen.getByText(/India that is Bharat/i).textContent).toBe("India that is Bharat");
    expect(screen.getByText(/Coloniality, Civilisation, Constitution/i).textContent).toBe("Coloniality, Civilisation, Constitution");
  });

  it("Book image should be available", () => {
    render(<BookDetails isTestMode />);
    expect(screen.getByAltText(/book/i)).toBeInTheDocument();
  });

  it("Back button should be available", () => {
    render(<BookDetails isTestMode />);
    expect(
      screen.getByRole("button", { name: /Back/i })
    ).toBeInTheDocument();
  });
});
