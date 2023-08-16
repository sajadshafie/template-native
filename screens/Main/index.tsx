import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './home';
import Profile from './profile';
import {Color} from '../../constant';
import {StyleSheet} from 'react-native';
const Tab = createBottomTabNavigator();

const sizeIcon = 25;

const Main: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Color.main_bg,
          height: 55,
          paddingBottom: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'home') {
            iconName = (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={sizeIcon}
                color={'white'}
                style={focused ? style.icon_shadow : style.icon_default}
              />
            );
          } else if (route.name === 'profile') {
            iconName = (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={sizeIcon}
                color={'white'}
                style={focused ? style.icon_shadow : style.icon_default}
              />
            );
          }

          // You can return any component that you like here!
          return iconName;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  icon_shadow: {
    textShadowColor: Color.shadow_icon,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2.5,
  },
  icon_default: {
    color: 'white',
  },
});

export default Main;
