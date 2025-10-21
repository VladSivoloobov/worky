// components/card/Card.tsx
import { Image, View, Text } from 'react-native';
import { CardProps } from './types';
import Button from '../button/Button';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function Card({ job, style, ...props }: CardProps) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={[styles.card, style]} {...props}>
      <Image
        style={styles.logo}
        source={{ uri: job.logo }}
        resizeMode="contain"
      />

      <Text style={styles.title}>{job.companyName}</Text>
      <Text style={styles.rating}>⭐ {job.customerRating}</Text>
      <Text style={styles.address}>{job.address}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Ставка:</Text>
        <Text style={styles.value}>{job.priceWorker} ₽</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Дата:</Text>
        <Text style={styles.value}>
          {job.dateStartByCity} • {job.timeStartByCity}–{job.timeEndByCity}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Работников:</Text>
        <Text style={styles.value}>
          {job.currentWorkers} / {job.planWorkers}
        </Text>
      </View>

      {job.isPromotionEnabled && (
        <View style={styles.promoBadge}>
          <Text style={styles.promoText}>🔥 Акция!</Text>
        </View>
      )}

      <Button
        onPress={() => navigation.navigate('vacancy', job)}
        text="Подробнее"
        style={styles.button}
      />
    </View>
  );
}
