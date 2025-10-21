import 'react-native-gesture-handler';
import './di/register';

import JobsScreen from './ui/screens/JobsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobInfoScreen from './ui/screens/job-info-screen/JobInfoScreen';
import { RootStackParamList } from './types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          options={{ title: 'Подработка' }}
          component={JobsScreen}
        />
        <Stack.Screen
          name="vacancy"
          options={{ title: 'Вакансия' }}
          component={JobInfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
