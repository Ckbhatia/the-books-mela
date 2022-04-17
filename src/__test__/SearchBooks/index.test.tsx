import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { render } from "../../utils/test-utils"
import SearchBooks from "../../Pages/SearchBooks";

describe('Search books', () => {
  it('Render Search Books', () => {
    render(<SearchBooks />);
    expect(screen.getByText(/Search Books/i).textContent).toBe(
      'Search Books',
    );
  });

  it('Search input should render and be working fine', async () => {
    const inputValue = 'India that is bharat';
    render(<SearchBooks />);
    const searchInput: HTMLInputElement = screen.getByPlaceholderText(/Search books/i);
    expect(searchInput).toBeInTheDocument();
    await fireEvent.change(searchInput, { target: { value: inputValue } })
    expect(searchInput.value).toBe(inputValue);
  });

  it('Search button should be disabled when no input text', async () => {
    render(<SearchBooks />);
    const searchButton: HTMLInputElement = screen.getByRole('button', { name: /Search/i });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeDisabled();
  });

  it("Search button should be enabled when there's input text", async () => {
    render(<SearchBooks />);
    const searchButton: HTMLElement = screen.getByRole('button', { name: /Search/i });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeDisabled();
    const inputValue = 'India that is bharat';
    const searchInput: HTMLInputElement = screen.getByPlaceholderText(/Search books/i);
    await fireEvent.change(searchInput, { target: { value: inputValue } })
    expect(searchButton).toBeEnabled();
  });

  it('Searched book results', () => {
    render(<SearchBooks isTestMode />);
    expect(screen.getByText(/results/i).textContent).toBe(
      'Results',
    );
    expect(screen.getAllByText(/India, that is Bharat/i)[0]?.textContent).toBe('India, that is Bharat');
  });
});