import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  style?: object;
  children?: ReactNode;
};

const AppView: React.FC<Props> = props => {
  return <View style={[style.container, props.style]}>{props.children}</View>;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    
  },
});

export default AppView;
