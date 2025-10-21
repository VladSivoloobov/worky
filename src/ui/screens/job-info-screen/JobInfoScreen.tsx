import { RouteProp, useRoute } from '@react-navigation/native';
import { Image, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../../../types/navigation';
import styles from './styles';

export default function JobInfoScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'vacancy'>>();
  const job = route.params;

  return (
    <ScrollView style={styles.scrollArea}>
      <Image
        style={styles.image}
        source={{ uri: job.logo }}
        resizeMode="contain"
      />

      <View style={styles.container}>
        <Text style={styles.title}>{job.companyName}</Text>
        <Text style={styles.address}>{job.address}</Text>

        {/* Основные метрики */}
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Работников сейчас / нужно:</Text>
          <Text style={styles.rowValue}>
            {job.currentWorkers} / {job.planWorkers}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Ставка:</Text>
          <Text style={styles.rowValue}>{job.priceWorker} ₽</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Бонус:</Text>
          <Text style={styles.rowValue}>
            {job.bonusPriceWorker > 0 ? `${job.bonusPriceWorker} ₽` : 'Нет'}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Дата и время:</Text>
          <Text style={styles.rowValue}>
            {job.dateStartByCity} • {job.timeStartByCity}–{job.timeEndByCity}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Рейтинг:</Text>
          <Text style={styles.rowValue}>{job.customerRating} ⭐</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Отзывов:</Text>
          <Text style={styles.rowValue}>{job.customerFeedbacksCount}</Text>
        </View>

        {/* Типы работ */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Требуемые специальности:</Text>
          {job.workTypes.map(type => (
            <Text key={type.id} style={styles.sectionValue}>
              • {type.name}
            </Text>
          ))}
        </View>

        {/* Акция */}
        {job.isPromotionEnabled && (
          <Text style={styles.promotion}>🔥 Акция! Повышенная ставка</Text>
        )}
      </View>
    </ScrollView>
  );
}
