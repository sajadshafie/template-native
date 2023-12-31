import React from 'react';
import Main from '../Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Authentication from './authentication';
import Confirm from './authentication/confirm';
import City from './city';
const Slack = createNativeStackNavigator();

const Auth: React.FC = () => {
  return (
    <Slack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_left',
      }}>
      <Slack.Screen component={Authentication} name="auth" />
      <Slack.Screen component={Confirm} name="confirm" />
      <Slack.Screen name="city" component={City} />

      <Slack.Screen name="main" component={Main} />
    </Slack.Navigator>
  );
};
export default Auth;
