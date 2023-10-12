import React from 'react';
import { ButtonImage } from 'components/atoms/ButtonImage/ButtonImage';

export default {
  title: 'Atoms/ButtonImage',
  component: ButtonImage,
};

export const AtomButtonImage = {
  render: (args) => <ButtonImage {...args} />,
  args: {
    image: 'https://cdn.pixabay.com/photo/2013/07/13/13/34/linux-161107_1280.png',
    alt: 'alt',
  },
};
