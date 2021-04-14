import React from 'react';
import { render } from '@Test';
import { Button } from '.';

describe('Button', () => {
  it('should render without crashing', () => {
    render(<Button onClick={() => 'click'} />);
  });
});
