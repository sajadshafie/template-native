import React, {useState} from 'react';
import AppView from '../../common/AppView';
import AppInput from '../../common/AppInput';
import {Color} from '../../constant';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, StyleProp, ViewStyle} from 'react-native';

type searchType = {
  placeholder: string;
  onSearch: () => void;
  onClear: () => void;
  onChange: (v: string) => void;
  value: string;
  // style: StyleProp<ViewStyle>;
};

const InputSearch: React.FC<Partial<searchType>> = props => {
  const [value, setValue] = useState('');

  const handleOnChange = (val: string) => {
    setValue(val);
    props.onChange && props.onChange(val);
  };

  return (
    <AppView style={style.container}>
      <View style={style.icon_container}>
        <AntDesign
          onPress={props.onSearch}
          style={{color: Color.light_gray30}}
          size={25}
          name="search1"
        />
      </View>
      <AppInput
        onChange={handleOnChange}
        value={props.value}
        placeholder={props.placeholder}
        style={style.input}
      />
      {value && (
        <View style={{...style.icon_container, right: 0, left: null}}>
          <AntDesign
            onPress={props.onClear}
            name="closecircle"
            color={Color.light_gray30}
            size={20}
          />
        </View>
      )}
    </AppView>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: Color.light_gray10,
    height: 60,
    paddingHorizontal: 45,
  },
  container: {
    position: 'relative',
    width: '100%',
  },
  icon_container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 50,
    height: '100%',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputSearch;
