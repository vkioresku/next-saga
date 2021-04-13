import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import * as nextImage from 'next/image';

import ThemeDecorator from './ThemeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
};

addDecorator((Story) => (
  <ThemeDecorator>
    <Story />
  </ThemeDecorator>
));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// Replace next/image for Storybook
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});
