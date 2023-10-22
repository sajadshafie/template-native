import React from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  View,
  ActivityIndicator,
  StyleProp,
} from 'react-native';
import AppText from './AppText';
import {Color} from '../constant';
import {VariantTypes} from '../types/global';
import globals from '../globals';

type AppButton = {
  text?: string;
  onPress?: () => void;
  styleButton?: StyleProp<ViewStyle>;
  styleView?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  isBoldText?: boolean;
  loading?: boolean;
  textVariant?: VariantTypes['variant'];
  variant: 'outlined' | 'contained';
};

const backgroundColorHandler = (
  variant: 'outlined' | 'contained',
  colorLoading: string,
  colorMain: string,
  loading: boolean | undefined,
) => {
  let res = {
    main: variant == 'contained' ? colorMain : 'transparent',
    loading: variant == 'contained' ? colorLoading : 'transparent',
  };
  const reslut = loading ? res.loading : res.main;
  return reslut;
};

export const ButtonOpacity: React.FC<AppButton> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          ...style[props.variant],
          backgroundColor: backgroundColorHandler(
            props.variant,
            Color.main_bg100,
            Color.main_bg,
            props.loading,
          ),
        },
        props.styleButton,
      ]}>
      <View style={[style.view_button, props.styleView]}>
        {props.loading && (
          <ActivityIndicator
            color={Color.shadow_icon}
            style={{marginRight: 10}}
          />
        )}
        <AppText
          variant={props.textVariant}
          is_bold={props.isBoldText}
          style={globals.combineStyleHandler(
            {color: props.variant == 'contained' ? 'white' : Color.main_bg},
            props.styleText,
          )}>
          {props.text}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonPresable: React.FC<AppButton> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[
        {
          ...style[props.variant],
          backgroundColor: backgroundColorHandler(
            props.variant,
            Color.main_bg100,
            Color.main_bg,
            props.loading,
          ),
        },
        props.styleButton,
      ]}>
      <View style={[style.view_button, props.styleView]}>
        <AppText
          variant={props.textVariant}
          is_bold={props.isBoldText}
          style={globals.combineStyleHandler(
            {color: props.variant == 'contained' ? 'white' : Color.main_bg},
            props.styleText,
          )}>
          {props.text}
        </AppText>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  contained: {
    paddingHorizontal: 7,
    paddingVertical: 8,
    borderRadius: 12,
    width: '100%',
  },
  outlined: {
    paddingHorizontal: 7,
    paddingVertical: 8,
    borderRadius: 12,
    width: '100%',
    borderColor: Color.main_bg,
    borderWidth: 1.2,
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
