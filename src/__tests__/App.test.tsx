import { render, screen } from '@testing-library/react';
import App from '../App';



it('should show React Logo', () => {
  render(<App />);
  expect(screen.getByAltText(/react logo/i)).toBeInTheDocument();
})