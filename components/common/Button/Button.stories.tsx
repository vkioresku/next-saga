import React from 'react';
import { Meta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

export const Default: React.FC = () => <Button onClick={() => 'click'} />;
