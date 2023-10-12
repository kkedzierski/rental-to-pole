import React from 'react';
import { Button } from 'components/atoms/Button/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const AtomButton = {
  render: (args) => <Button {...args} />,
  args: {
    text: 'Generate ad',
  },
};
