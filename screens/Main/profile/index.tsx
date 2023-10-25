import React from 'react';
import AppView from '../../../common/AppView';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './main';
import Userinfo from './userinfo';
const Slack = createNativeStackNavigator();

const Profile: React.FC = () => {
  return (
    <AppView style={{flex: 1}}>
      <Slack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'flip',
        }}>
        <Slack.Screen component={Main} name="main" />
        <Slack.Screen component={Userinfo} name="userinfo" />
      </Slack.Navigator>
    </AppView>
  );
};

export default Profile;
