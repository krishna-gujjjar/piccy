import { useMemo } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import { SIZE } from '@/configs/properties';

interface ImageProps {
  value: string;
  source?: string;
  size: 'lg' | 'md' | 'sm' | number;
  handleIsLoaded: Dispatch<SetStateAction<boolean>>;
}

const Image = (props: ImageProps): JSX.Element => {
  const size = useMemo(
    () => (typeof props.size === 'string' ? SIZE[props.size] : props.size),
    [props.size]
  );

  return (
    <img
      width={size}
      height={size}
      alt={props.value}
      src={props.source}
      onLoad={() => props.handleIsLoaded(true)}
      onError={() => props.handleIsLoaded(false)}
    />
  );
};

export default Image;
