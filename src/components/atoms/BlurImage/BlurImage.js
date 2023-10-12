import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { Blurhash } from 'react-blurhash';
import { maxDeviceSize } from 'utils/deviceSize';

export const BlurImage = ({ src, alt, hash, width, height, style }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width={Number(width)}
          height={Number(height)}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          style={style}
        />
      )}
      {imageLoaded && <StyledImage src={src} alt={alt} />}
    </>
  );
};

BlurImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.element,
};

BlurImage.defaultProps = {
  width: '400',
  height: '300',
  style: {},
};

const StyledImage = styled.img`
  display: block;
  width: 500px;

  @media ${maxDeviceSize.smallScreen} {
    width: 400px;
  }

  @media ${maxDeviceSize.verySmallScreen} {
    width: 300px;
  }

  @media ${maxDeviceSize.tablet} {
    width: 100px;
  }

  @media ${maxDeviceSize.phone} {
    width: 100px;
    text-align: center;
  }
`;
