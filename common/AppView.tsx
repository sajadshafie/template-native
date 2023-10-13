import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import globals from '../globals';
type Props = {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

const AppView: React.FC<Props> = props => {
  return (
    <View style={globals.combineStyleHandler(style.container, props.style)}>
      {props.children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default AppView;
