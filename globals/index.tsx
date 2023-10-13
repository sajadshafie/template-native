import {StyleSheet, ViewStyle, StyleProp, TextStyle} from 'react-native';

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
};
