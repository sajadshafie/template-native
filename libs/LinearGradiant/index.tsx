import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, ViewStyle} from 'react-native';

type propsTypes = {
  colors: (string | number)[] | string;
  children: React.ReactNode;
  styles: ViewStyle;
};

const AppLinearGradiant: React.FC<Partial<propsTypes>> = props => {
  
  return (
    <LinearGradient
      colors={props.colors ? props.colors : []}
      style={[style.linearGradient, props.styles]}>
      {props.children}
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
  },
});

export default AppLinearGradiant;
