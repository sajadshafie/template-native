import React, {createContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Auth/splash';
import { I18nManager } from 'react-native';
import TypeContext from './types/contenxt';
import Main from './screens/Auth';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Color } from './constant';
export const context = createContext<any>(null);

const Slack = createNativeStackNavigator();

const App = (): JSX.Element => {
  const [state, setState] = useState<TypeContext>({
    splash: true,
  });
  const example = async () => {
    try{
        const response = await changeNavigationBarColor(Color.main_bg);
        console.log(response)// {success: true}
    }catch(e){
        console.log(e)// {success: false}
    }
  
  };
  useEffect(()=>{
    example()
    if(I18nManager.isRTL){
      I18nManager.forceRTL(true)
    }
  },[])
  return (
    <NavigationContainer>
      <context.Provider value={{state, setState}}>
        <Slack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade',
          }}>
          {state.splash ? (
            <Slack.Screen
              name="splash"
              component={Splash}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Slack.Screen
              name="main"
              component={Main}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Slack.Navigator>
      </context.Provider>
    </NavigationContainer>
  );
};
export default App;
