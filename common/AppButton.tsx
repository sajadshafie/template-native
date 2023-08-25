import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import AppText from './AppText';
import { Color } from '../constant';

type AppButton = {
  text?: string;
  onPress?: () => void;
  styleButton?: object;
  styleView?: object;
  styleText?: object;
  isBoldText?: boolean
  loading?: boolean
};

export const ButtonOpacity: React.FC<AppButton> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}

      style={[{ ...style.container_button, backgroundColor: props.loading ? Color.main_bg100 : Color.main_bg }, props.styleButton]}>
      <View style={[style.view_button, props.styleView]}>
        {props.loading && <ActivityIndicator color={Color.shadow_icon} style={{ marginRight: 10 }} />}

      </View>
    </TouchableOpacity>
  );
};

export const ButtonPresable: React.FC<AppButton> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[{ ...style.container_button, backgroundColor: props.loading ? Color.main_bg100 : Color.main_bg, }, props.styleButton]}>
      <View style={[style.view_button, props.styleView]}>
        <AppText is_bold={props.isBoldText} style={[style.text, props.styleText]} >{props.text}</AppText>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container_button: {

    paddingHorizontal: 7,
    paddingVertical: 8,
    borderRadius: 12,
    width: "100%"
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
