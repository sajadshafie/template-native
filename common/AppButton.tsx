import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import AppText from './AppText';
import {Color} from '../palette';

type AppButton = {
  text?: string;
  onPress?: () => void;
  styleButton?: object;
  styleView?: object;
  styleText?: object;
};

export const ButtonOpacity: React.FC<AppButton> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[style.container_button, props.styleButton]}>
      <View style={[style.view_button, props.styleView]}>
        <AppText text={props.text} style={[style.text, props.styleText]} />
      </View>
    </TouchableOpacity>
  );
};

export const ButtonPresable: React.FC<AppButton> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[style.container_button, props.styleButton]}>
      <View style={[style.view_button, props.styleView]}>
        <AppText text={props.text} style={[style.text, props.styleText]} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container_button: {
    backgroundColor: Color.main_bg,
    paddingHorizontal: 7,
    paddingVertical: 8,
  },
  text: {
    color: 'white',
  },
  view_button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
