import { Image, View, Text } from 'react-native';
import { CardProps } from './types';
import Button from '../button/Button';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

export default function Card({ job, style, ...props }: CardProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.card, style]} {...props}>
      <Image
        style={styles.logo}
        source={{
          uri: job.logo,
        }}
      />
      <Text style={styles.title}>{job.companyName}</Text>
      <Text style={styles.rating}>Рейтинг: {job.customerRating}</Text>
      <Text style={styles.address}>Адрес: {job.address}</Text>
      <Text style={styles.price}>Стоимость: {job.priceWorker}Р</Text>
      <Text style={styles.dateTime}>
        Дата: {job.dateStartByCity} : {job.timeStartByCity}-{job.timeEndByCity}
      </Text>
      <Button
        onPress={() => navigation.navigate('vacancy', job)}
        text="Подробнее"
      />
    </View>
  );
}
