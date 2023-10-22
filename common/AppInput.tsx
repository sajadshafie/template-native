import React, {forwardRef, useState} from 'react';
import {StyleSheet, TextInput, TextStyle} from 'react-native';
import {Color} from '../constant';

type AppProps = {
  style?: TextStyle;
  onChange?: (v: string) => void;
  value?: string;
  placeholder?: string;
  keyboardType?: string | any;
  placeholderStyle?: object;
  autoFocus?: boolean;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  onKeyPress?: (e: any) => void;
};

const AppInput: React.ForwardRefRenderFunction<TextInput, AppProps> = (
  props,
  ref,
) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const onFocused = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };
  return (
    <TextInput
      ref={ref}
      blurOnSubmit={props.blurOnSubmit}
      onSubmitEditing={props.onSubmitEditing}
      autoFocus={props.autoFocus}
      onChangeText={props.onChange}
      placeholder={props.placeholder}
      style={[
        {
          ...styles.input,
          borderColor: isFocus ? Color.yellow_main : Color.main_bg,
          borderWidth: isFocus ? 2 : 1,
        },
        props.style,
      ]}
      value={props.value}
      keyboardType={props.keyboardType}
      placeholderTextColor={Color.sub_text}
      returnKeyType={props.returnKeyType}
      onFocus={onFocused}
      onBlur={onBlur}
      onKeyPress={props.onKeyPress}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    height: 45,

    width: '100%',
    paddingHorizontal: 10,
    color: Color.text_color,
    fontFamily: 'IRANSansFaNum',
  },
});

export default forwardRef<TextInput, AppProps>(AppInput);
