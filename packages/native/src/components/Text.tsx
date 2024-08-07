import { useMemo } from 'react';
import { Text as TextComponent } from 'react-native';

import { SIZE } from '@/configs/properties';

interface TextProps {
  value: string;
  color: string;
  size: 'sm' | 'md' | 'lg' | number;
}

const getTwoLetters = (string: string): string => {
  if (!string || string.trim() === '') {
    return '?';
  }

  const initials = string
    .trim()
    .split(/\W+/)
    .reduce((acc, word) => acc + word.charAt(0), '');

  return initials.slice(0, 2) || initials.charAt(0);
};

const Text = (props: TextProps): JSX.Element => {
  const size = useMemo(
    () => (typeof props.size === 'string' ? SIZE[props.size] : props.size) / 3,
    [props.size]
  );

  return (
    <TextComponent
      style={{ fontSize: size, fontWeight: 'bold', textTransform: 'uppercase', color: props.color }}
    >
      {getTwoLetters(props.value)}
    </TextComponent>
  );
};
export default Text;
