import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Color} from '../constant';

type Props = {
  text?: string;
  style?: object;
};

const AppText: React.FC<Props> = props => {
  return <Text style={[style.text, props.style]}>{props.text}</Text>;
};

const style = StyleSheet.create({
  text: {
    color: Color.text_color,
    fontFamily: 'IRANSansXBlack',
  },
});

export default AppText;
