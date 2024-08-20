import { useMemo, useState } from 'react';
import type { ColorValue, ImageSourcePropType } from 'react-native';

import ConditionalWrapper from './components/ConditionalWrapper';
import Container from './components/Container';
import Image from './components/Image';
import Shape from './components/Shape';
import Text from './components/Text';
import { BACKGROUND_COLORS, SHAPE_COLORS, TEXT_COLORS } from './configs/colors';
import { COLORS_COUNT, SHAPES_COUNT } from './configs/properties';
import randomNumber from './utils/random';

interface AvatarProps {
  value: string;
  title?: string;
  color?: ColorValue;
  withShape?: boolean;
  withBorder?: boolean;
  withShadow?: boolean;
  borderColor?: ColorValue;
  withColoredBorder?: boolean;
  source?: ImageSourcePropType;
  size?: 'sm' | 'md' | 'lg' | number;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

export const Avatar = (props: AvatarProps): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const colorKey = useMemo(() => randomNumber(props.value, 0, COLORS_COUNT), [props.value]);
  const shapeKey = useMemo(() => randomNumber(props.value, 1, SHAPES_COUNT), [props.value]);

  return (
    <Container
      size={props.size ?? 'md'}
      rounded={props.rounded ?? 'full'}
      withBorder={props.withBorder ?? true}
      withShadow={props.withShadow ?? true}
      color={SHAPE_COLORS[colorKey] ?? '#000'}
      bg={BACKGROUND_COLORS[colorKey] ?? '#fff'}
      borderColor={
        props.borderColor ??
        (props.withColoredBorder ?? false ? SHAPE_COLORS[colorKey] ?? '#000' : '#fff')
      }
    >
      <ConditionalWrapper shouldRender={typeof props.source !== 'undefined'}>
        <Image
          value={props.value}
          size={props.size ?? 'md'}
          source={props.source ?? {}}
          handleIsLoaded={setIsLoaded}
        />
      </ConditionalWrapper>
      <ConditionalWrapper shouldRender={!isLoaded}>
        <ConditionalWrapper shouldRender={props.withShape ?? true}>
          <Shape
            value={shapeKey}
            size={props.size ?? 'md'}
            color={props.color ?? SHAPE_COLORS[colorKey] ?? '#000'}
          />
        </ConditionalWrapper>
        <ConditionalWrapper shouldRender={!(props.withShape ?? true)}>
          <Text
            size={props.size ?? 'md'}
            value={props.title ?? props.value}
            color={TEXT_COLORS[colorKey] ?? '#000'}
          />
        </ConditionalWrapper>
      </ConditionalWrapper>
    </Container>
  );
};
