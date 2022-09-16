import { render, screen, waitFor } from 'utils/tests/renderer';
import Home from '../Home';

describe('Home', () => {
  it('matches snapshot', async () => {
    const { container } = render(<Home />);

    await waitFor(() => {
      expect(screen.getByTestId('map')).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});
