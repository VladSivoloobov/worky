import { Image, View, Text } from 'react-native';
import { CardProps } from './types';
import Button from '../button/Button';

export default function Card({ job, ...props }: CardProps) {
  return (
    <View {...props}>
      <Image
        source={{
          uri: job.logo,
        }}
      />
      <Text>{job.companyName}</Text>
      <Text>{job.customerRating}</Text>
      <Text>{job.workTypes.name}</Text>
      <Text>{job.address}</Text>
      <Text>{job.priceWorker}</Text>
      <Text>
        {job.dateStartByCity}:{job.timeStartByCity}-{job.timeEndByCity}
      </Text>
      <Button text="Подробнее" />
    </View>
  );
}
