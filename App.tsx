import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Auth/splash';
import Auth from './screens/Auth/authentication';
import TypeContext from './types/contenxt';
import Main from './screens/Auth';

export const context = createContext<any>(null);

const Slack = createNativeStackNavigator();

const App = (): JSX.Element => {
  const [state, setState] = useState<TypeContext>({
    splash: true,
  });
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
