import { Text, Animated, StyleSheet } from 'react-native';
import { ButtonProps } from './types';
import { buttonStyles, buttonTextStyles } from './styles';
import { useRef } from 'react';
import AnimatedPressable from '../AnimatedPressable';

export default function Button({
  variant = 'primary',
  text,
  style,
  width = 'full',
  ...props
}: ButtonProps) {
  const opacity = useRef(new Animated.Value(1)).current;

  const pressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.7,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedPressable
      onPressIn={pressIn}
      onPressOut={pressOut}
      style={StyleSheet.flatten([
        buttonStyles.button,
        buttonStyles[variant],
        style,
        { opacity },
      ])}
      {...props}
    >
      <Text style={[buttonTextStyles.text, buttonTextStyles[variant]]}>
        {text}
      </Text>
    </AnimatedPressable>
  );
}
