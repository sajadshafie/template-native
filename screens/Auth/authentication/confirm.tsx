import React, {useState, useEffect} from 'react';
import NavigationProps from '../../../types/navigation';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import {StyleSheet} from 'react-native';
import AppInput from '../../../common/AppInput';
import AuthLayout from '../../../Layout/auth';
import {View, Keyboard} from 'react-native';
import {Color} from '../../../constant';
import {ButtonPresable} from '../../../common/AppButton';

type Inp = {
  value: string;
  is_focused: boolean;
  type: string;
};

const Confirm = (props: NavigationProps): JSX.Element => {
  const [form, setForm] = useState<Inp[]>([
    {
      value: '',
      is_focused: true,
      type: 'inp1',
    },
    {
      value: '',
      is_focused: false,
      type: 'inp2',
    },
    {
      value: '',
      is_focused: false,
      type: 'inp3',
    },
    {
      value: '',
      is_focused: false,
      type: 'inp4',
    },
    {
      value: '',
      is_focused: false,
      type: 'inp5',
    },
  ]);
  Keyboard.addListener('keyboardWillHide', () => {
    // console.log('first');
  });
  const [counter, setCounter] = useState<number>(60);

  const myRef = React.useRef<any>([]);

  const onChangeInputs = (value: string, index: number) => {
    setForm((state: Inp[]) => {
      return state.map((v: Inp, i: number) => {
        if (index == i) {
          form[index].value.length < 1 && (v.value = value);
        }
        if (value.length >= 1) {
          myRef.current[index + 1]?.focus();
        }
        return v;
      });
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((state: number) => {
        if (state !== 0) {
          return state - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const onKeyPressInput = ({nativeEvent}: any, index: number) => {
    if (nativeEvent.key == 'Backspace') {
      form[index].value = '';
    }
  };

  const onSubmit = () => {
    props.navigation.navigate('city');
  };

  return (
    <AuthLayout
      textbutton="تایید"
      onSubmit={onSubmit}
      title="تایید کد"
      description={`کد پنج رقمی برای شماره ${props.route.params.phone} ارسال شده را واردکنید`}>
      <AppView style={style.wrap}>
        {form.map((v: Inp, i: number) => {
          return (
            <View style={style.container_input} key={i}>
              <AppInput
                onKeyPress={(event: any) => onKeyPressInput(event, i)}
                keyboardType={'numeric'}
                onSubmitEditing={() => {
                  if (i < form.length - 1) {
                    myRef.current[i + 1]?.focus();
                  }
                }}
                ref={input => {
                  myRef.current[i] = input;
                }}
                autoFocus={v.is_focused}
                style={style.input_style}
                onChange={value => onChangeInputs(value, i)}
                blurOnSubmit={false}
                returnKeyType="next"
                value={v.value}
              />
              <View style={style.line} />
            </View>
          );
        })}
      </AppView>
      {counter == 0 ? (
        <AppView style={{marginVertical: 20}}>
          <ButtonPresable
            variant="contained"
            onPress={() => setCounter(60)}
            styleButton={{
              backgroundColor: Color.light_white,
              borderColor: Color.yellow_main,
              borderWidth: 1,
            }}
            textVariant="yellow"
            text="ارسال مجدد کد"
            styleText={{color: Color.yellow_main}}
          />
        </AppView>
      ) : (
        <AppView style={style.counter_container}>
          <AppText variant="yellow">{counter}</AppText>
        </AppView>
      )}
    </AuthLayout>
  );
};

const style = StyleSheet.create({
  input_style: {
    width: 60,
    height: 50,
    textAlign: 'center',
    borderColor: Color.light_white,
  },
  wrap: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
  },
  input_container: {
    display: 'flex',
    flexDirection: 'row',
  },
  container_input: {
    position: 'relative',
  },
  line: {
    borderColor: Color.yellow_main,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 1,
    width: '60%',
    marginHorizontal: 'auto',
    marginVertical: 0,
    position: 'absolute',
    top: 45,
    left: 13,
  },
  counter_container: {
    borderRadius: 100,
    borderColor: Color.yellow_main,
    borderWidth: 2,
    width: 55,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default Confirm;
