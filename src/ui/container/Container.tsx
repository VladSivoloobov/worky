import { View, ViewProps } from 'react-native';
import styles from './styles';

export default function Container({ style, ...props }: ViewProps) {
  return <View style={[styles.container, style]} {...props} />;
}
