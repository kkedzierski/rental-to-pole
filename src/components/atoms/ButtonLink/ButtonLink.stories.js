import React from 'react';
import { ButtonLink } from 'components/atoms/ButtonLink/ButtonLink';

export default {
  title: 'Atoms/ButtonLink',
  component: ButtonLink,
};

export const AtomButtonLink = {
  render: (args) => <ButtonLink {...args} />,
  args: {
    text: 'Generate ad',
    to: 'place to smooth scroll',
  },
};
