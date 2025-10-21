import { StyleSheet } from 'react-native';
import colors from '../../../const/colors';

export default StyleSheet.create({
  scrollArea: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },
  image: {
    height: 200,
    width: '100%',
    backgroundColor: '#FFFFFF',
    resizeMode: 'contain', // вместо objectFit
    marginBottom: 16,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3, // для Android
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 16,
  },
  section: {
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 4,
    fontWeight: '600',
  },
  sectionValue: {
    fontSize: 16,
    color: '#222222',
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  rowLabel: {
    fontSize: 14,
    color: '#777777',
  },
  rowValue: {
    fontSize: 16,
    color: '#222222',
    fontWeight: '600',
  },
  promotion: {
    fontSize: 16,
    color: '#3B5998',
    fontWeight: '600',
    marginTop: 8,
  },
});
