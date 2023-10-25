import {
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  Animated,
} from 'react-native';

export default {
  combineStyleHandler: (
    firstStyle: StyleProp<ViewStyle> | StyleProp<TextStyle>,
    secondStyle: StyleProp<ViewStyle> | StyleProp<TextStyle>,
  ): StyleProp<ViewStyle> => {
    const combinedStyle = Array.isArray(secondStyle)
      ? StyleSheet.flatten([firstStyle, ...secondStyle])
      : StyleSheet.flatten([firstStyle, secondStyle]);
    return combinedStyle;
  },
  numberOnly: (value: string) => {
    return value.replace(/\D/g, '');
  },
  AnimateRenderTime: (state: any, value: number, duration: number) => {
    Animated.timing(state, {
      toValue: value,
      duration: duration,
      useNativeDriver: true,
    }).start();
  },
};
