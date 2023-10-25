import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './home';
import Profile from './profile';
import {Color} from '../../constant';
import {StyleSheet} from 'react-native';
import TabRender from '../../components/main/TabRender';
import {TabItems} from '../../components/main/TabRender/items';
import {tabType} from '../../types';
const Tab = createBottomTabNavigator();

const sizeIcon = 25;

const Main: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: Color.main_bg,
          height: 70,
          paddingBottom: 5,
          marginHorizontal: 10,
          marginBottom: 10,
          borderRadius: 20,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName = TabItems.map((v: tabType, i: number) => {
            if (v.tabName == route.name) {
              return (
                <React.Fragment key={i}>
                  <TabRender
                    focused={focused}
                    text={v.text}
                    iconNameActive={v.iconNameActive}
                    iconNameDeactive={v.iconNameDeactive}
                  />
                </React.Fragment>
              );
            }
          });

          return iconName;
        },
        tabBarActiveTintColor: Color.light_white,
        tabBarInactiveTintColor: 'gray',
      })}>
      {TabItems.map((v: tabType, i: number) => {
        return (
          <React.Fragment key={i}>
            <Tab.Screen name={v.tabName} component={v.component} />
          </React.Fragment>
        );
      })}
    </Tab.Navigator>
  );
};

export default Main;
