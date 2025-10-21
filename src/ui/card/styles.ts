import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3, // для Android
  },
  logo: {
    height: 140,
    width: '100%',
    backgroundColor: '#F8FAFF',
    borderRadius: 12,
    marginBottom: 14,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 6,
  },
  rating: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 6,
  },
  address: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    color: '#777777',
    fontWeight: '600',
  },
  value: {
    fontSize: 14,
    color: '#222222',
    fontWeight: '600',
  },
  promoBadge: {
    backgroundColor: '#E6F0FF',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  promoText: {
    fontSize: 12,
    color: '#3B5998',
    fontWeight: '600',
  },
  button: {
    marginTop: 8,
  },
});
