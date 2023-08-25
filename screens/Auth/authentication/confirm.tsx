import React, {useState} from 'react';
import NavigationProps from '../../../types/navigation';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import {StyleSheet} from 'react-native';
import AppInput from '../../../common/AppInput';

type Inp = {
  value: string;
  is_focused: boolean;
  type: string;
};

const Confirm = (props: NavigationProps): JSX.Element => {
  const [form, setForm] = useState<Inp[]>([
    {
      value: '',
      is_focused: false,
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
  const onInputs = (value: string, index: number) => {
    const dd: Inp[] = form.map((v: Inp, i) => {
      if (index == i) {
        v.value = value;
      }
      return v;
    });
    setForm(dd);
  };
  return (
    <AppView style={{flex: 1}}>
      <AppView style={style.text_}>
        <AppText variant="sub">کد پنج رقمی برای شماره تلفن</AppText>
        <AppText variant="h6" is_bold>
          {props.route.params.phone}
        </AppText>
        <AppText variant="sub">
          ارسال شده است لطفا کد پنج رقمی را وارد کنید
        </AppText>
      </AppView>
      <AppView style={style.input_container}>
        {form.map((v: Inp, i: number) => {
          return (
            <React.Fragment key={i}>
              <AppInput
                value={v.value}
                placeholder=""
                onChange={v => onInputs(v, i)}
              />
            </React.Fragment>
          );
        })}
      </AppView>
    </AppView>
  );
};

const style = StyleSheet.create({
  text_: {
    marginBottom: 20,
  },
  input_container: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Confirm;
