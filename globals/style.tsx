import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {Color} from '../constant';
type designType = {
  value: number;
  label: number;
};

const design: designType[] = [
  {
    value: 8,
    label: 1,
  },
  {
    value: 16,
    label: 2,
  },
  {
    value: 24,
    label: 3,
  },
  {
    value: 32,
    label: 4,
  },
  {
    value: 40,
    label: 5,
  },
  {
    value: 48,
    label: 6,
  },
  {
    value: 56,
    label: 7,
  },
  {
    value: 62,
    label: 8,
  },
];
const dynamicStyle = (value: number, type: string) => {
  const foundValue = design.find(item => item.label === value)?.value;
  if (foundValue) {
    return {
      [type]: foundValue,
    };
  }
  return {};
};
export const GlobalStyle = StyleSheet.create({
  divider: {
    width: '100%',
    backgroundColor: Color.light_gray20,
    height: 1,
  },
  full: {
    flex: 1,
  },
  p_1: dynamicStyle(1, 'padding'),
  p_2: dynamicStyle(2, 'padding'),
  p_3: dynamicStyle(3, 'padding'),
  p_4: dynamicStyle(4, 'padding'),
  px_1: dynamicStyle(1, 'paddingHorizontal'),
  px_2: dynamicStyle(2, 'paddingHorizontal'),
  px_3: dynamicStyle(3, 'paddingHorizontal'),
  px_4: dynamicStyle(4, 'paddingHorizontal'),
  py_1: dynamicStyle(1, 'paddingVertical'),
  py_2: dynamicStyle(2, 'paddingVertical'),
  py_3: dynamicStyle(3, 'paddingVertical'),
  py_4: dynamicStyle(4, 'paddingVertical'),
  mb_1: dynamicStyle(1, 'marginBottom'),
  mb_2: dynamicStyle(2, 'marginBottom'),
  mb_3: dynamicStyle(3, 'marginBottom'),
  mb_4: dynamicStyle(4, 'marginBottom'),
  mb_5: dynamicStyle(5, 'marginBottom'),
  mb_6: dynamicStyle(6, 'marginBottom'),
  mr_1: dynamicStyle(1, 'marginRight'),
  mr_2: dynamicStyle(2, 'marginRight'),
  mr_3: dynamicStyle(3, 'marginRight'),
  mr_4: dynamicStyle(4, 'marginRight'),
  mt_1: dynamicStyle(1, 'marginTop'),
  mt_2: dynamicStyle(2, 'marginTop'),
  mt_3: dynamicStyle(3, 'marginTop'),
  mt_4: dynamicStyle(4, 'marginTop'),
  ml_1: dynamicStyle(1, 'marginLeft'),
  ml_2: dynamicStyle(2, 'marginLeft'),
  ml_3: dynamicStyle(3, 'marginLeft'),
  my_1: dynamicStyle(1, 'marginVertical'),
  my_2: dynamicStyle(2, 'marginVertical'),
  my_3: dynamicStyle(3, 'marginVertical'),
  my_4: dynamicStyle(4, 'marginVertical'),
  my_5: dynamicStyle(5, 'marginVertical'),
  mx_1: dynamicStyle(1, 'marginHorizontal'),
  mx_2: dynamicStyle(2, 'marginHorizontal'),
  mx_3: dynamicStyle(3, 'marginHorizontal'),
  mx_4: dynamicStyle(4, 'marginHorizontal'),
  mx_5: dynamicStyle(5, 'marginHorizontal'),
});
