import React from 'react';
import { render } from '../../../test/test-utils';
import { Container } from '.';

describe('Container', () => {
  it('should render without crashing', () => {
    render(
      <Container>
        <div />
      </Container>
    );
  });
});
