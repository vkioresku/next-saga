import React from 'react';
import { render } from '@Test';
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
