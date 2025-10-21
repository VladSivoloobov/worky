import { observer } from 'mobx-react-lite';
import container from '../../di/container';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import Card from '../card/Card';

const JobList = observer(() => {
  const jobStore = container.resolve('jobStore');

  useEffect(() => {
    jobStore.fetchJobs();
  }, []);

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
