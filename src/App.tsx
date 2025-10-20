import './di/register';

import { StatusBar, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Container from './ui/container/Container';
import JobList from './ui/job-list/JobList';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsents = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: safeAreaInsents.top,
        paddingBottom: safeAreaInsents.bottom,
        paddingRight: safeAreaInsents.right,
        paddingLeft: safeAreaInsents.left,
      }}
    >
      <Container>
        <JobList />
      </Container>
    </View>
  );
}
