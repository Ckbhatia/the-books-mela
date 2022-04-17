import { screen } from '@testing-library/react';
import { render } from "../../utils/test-utils"
import HomePage from "../../Pages";

describe('Home page', () => {
  it('Render Home page', () => {
    render(<HomePage />);
    expect(screen.getByText(/The books mela/i).textContent).toBe(
      'The books mela',
    );
  });

  it('Social login should be available', () => {
    render(<HomePage />);
    expect(screen.getByTestId(/google-login/i)).toBeInTheDocument();
  });
});