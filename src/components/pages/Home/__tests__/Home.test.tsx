import { render } from 'utils/tests/renderer';

import Home from '../Home';

describe('Home', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
