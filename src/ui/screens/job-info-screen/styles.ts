import { StyleSheet } from 'react-native';
import colors from '../../../const/colors';

export default StyleSheet.create({
  image: {
    height: 200,
    backgroundColor: colors.white,
    objectFit: 'contain',
    marginBottom: 12,
  },
  scrollArea: {
    height: '100%',
  },
  title: {
    fontSize: 28,
    marginBottom: 12,
    fontWeight: 500,
  },
  address: {
    fontSize: 18,
  },
});
