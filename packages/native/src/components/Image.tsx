import { useMemo } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Image as ImageComponent } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

import { SIZE } from '@/configs/properties';

interface ImageProps {
  value: string;
  source: ImageSourcePropType;
  size: 'lg' | 'md' | 'sm' | number;
  handleIsLoaded: Dispatch<SetStateAction<boolean>>;
}

const Image = (props: ImageProps): JSX.Element => {
  const size = useMemo(
    () => (typeof props.size === 'string' ? SIZE[props.size] : props.size),
    [props.size]
  );

  return (
    <ImageComponent
      width={size}
      height={size}
      alt={props.value}
      resizeMode="cover"
      source={props.source}
      onLoad={() => props.handleIsLoaded(true)}
      onError={() => props.handleIsLoaded(false)}
    />
  );
};

export default Image;
