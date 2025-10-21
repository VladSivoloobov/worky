import { observer } from 'mobx-react-lite';
import container from '../../di/container';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import Card from '../card/Card';
import { useLocation } from '../../hooks/useLocation';
import { Text } from 'react-native-gesture-handler';
import styles from './styles';

const JobList = observer(() => {
  const { location, loading, error } = useLocation();
  const jobStore = container.resolve('jobStore');

  useEffect(() => {
    if (!location) return;
    jobStore.fetchJobs(location.latitude, location.longitude);
  }, [location]);

  if (loading || jobStore.loading) {
    return <Text style={styles.messageText}>Загрузка...</Text>;
  }

  if (error) {
    return <Text style={styles.messageText}>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={jobStore.jobs}
      contentContainerStyle={{
        gap: 12,
      }}
      renderItem={item => {
        return <Card job={item.item} />;
      }}
    />
  );
});

export default JobList;
