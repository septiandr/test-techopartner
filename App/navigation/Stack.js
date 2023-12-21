import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Scan from '../screens/Scan';
import MyTabs from './Tabs';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
      screenOptions ={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="Scan" component={Scan} />
    </Stack.Navigator>
  );
}
export default MyStack