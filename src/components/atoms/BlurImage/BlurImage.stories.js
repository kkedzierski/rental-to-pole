import React from 'react';
import { BlurImage } from 'components/atoms/BlurImage/BlurImage';

export default {
  title: 'Atoms/BlurImage',
  component: BlurImage,
};

export const AtomBlurImage = {
  render: (args) => <BlurImage {...args} />,
  args: {
    src: 'https://cdn.pixabay.com/photo/2013/07/13/13/34/linux-161107_1280.png',
    alt: 'alt',
    hash: 'LAHC1bNO00$[uP,..89]-naJ?wo~',
  },
};
