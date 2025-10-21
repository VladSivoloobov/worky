import { RouteProp, useRoute } from '@react-navigation/native';
import { Image, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../../../types/navigation';
import styles from './styles';
import Container from '../../container/Container';

export default function JobInfoScreen() {
  const { params: job } = useRoute<RouteProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.scrollArea}>
      <Image
        style={styles.image}
        source={{
          uri: job?.logo,
        }}
      />
      <Container>
        <Text style={styles.title}>{job?.companyName}</Text>
        <Text style={styles.address}>{job?.address}</Text>
        <Text style={styles.workers}>{job?.currentWorkers}</Text>
        <Text style={styles.rating}>{job?.customerRating}</Text>
        <Text style={styles.planWorkers}>{job?.planWorkers}</Text>
        <Text style={styles.bonusPriceWorker}>{job?.bonusPriceWorker}</Text>
        <Text style={styles.date}>{job?.dateStartByCity}</Text>
        <Text style={styles.time}>
          {job?.timeStartByCity} - {job?.timeEndByCity}
        </Text>
        <Text style={styles.price}>{job?.priceWorker}</Text>
        <Text style={styles.promotion}>{job?.isPromotionEnabled}</Text>
      </Container>
    </ScrollView>
  );
}
