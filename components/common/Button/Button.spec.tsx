import React from 'react';
import { render } from '../../../test/test-utils';
import { Button } from '.';

describe('Button', () => {
  it('should render without crashing', () => {
    render(<Button onClick={() => console.log('click')} />);
  });
});
