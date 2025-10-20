import { StyleSheet } from 'react-native';
import colors from '../../const/colors';

export const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 17,
    width: 'auto',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
});

export const buttonTextStyles = StyleSheet.create({
  text: {
    fontWeight: 600,
    textAlign: 'center',
  },
  primary: {
    color: colors.white,
  },
  secondary: {
    color: colors.primary,
  },
});
