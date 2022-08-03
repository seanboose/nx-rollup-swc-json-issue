import { render } from '@testing-library/react';

import ReactBuildableSwc from './react-buildable-swc';

describe('ReactBuildableSwc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactBuildableSwc />);
    expect(baseElement).toBeTruthy();
  });
});
