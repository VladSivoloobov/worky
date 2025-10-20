import type { PressableProps } from 'react-native';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  text?: string;
  width?: 'content' | 'full';
} & PressableProps;
