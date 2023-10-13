import React, {useState} from 'react';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import {ButtonOpacity} from '../../../common/AppButton';
import {StyleSheet} from 'react-native';
import NavigationProps from '../../../types/navigation';
import AppImage from '../../../common/AppImage';
import AppInput from '../../../common/AppInput';
import AuthLayout from '../../../Layout/auth';
const Authentication: React.FC<NavigationProps> = props => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<null | string>(null);
  const [phone, setPhone] = useState('');
  const onForm = (v: string) => {
    !phone.startsWith('09')
      ? setErr('شماره تلفن معتبر نمی باشد')
      : setErr(null);
    setPhone(v);
  };

  const onRegister = () => {
    if (phone.length == 11) {
      setErr(null);
      setLoading(true);
      setTimeout(() => {
        props.navigation.navigate('confirm', {phone: phone});
        setLoading(false);
      }, 2000);
    } else if (phone.length == 0) {
      setErr('شماره تلفن نمیتواند خالی باشد');
    } else if (phone.length > 11 || phone.length < 11) {
      setErr('شماره تلفن معتبر نمی باشد');
    }
  };

  return (
    <AuthLayout
      textbutton="ثبت نام"
      loading={loading}
      onSubmit={onRegister}
      description="لطفا شماره موبایل خود را وارد کنید.چنانچه شماره تلفن وارد شده معتبر باشد
    برای شما پیامکی ارسال میگردد."
      title="  به ماهر خوش امدید">
      <AppView style={{marginTop: 20, width: '100%', marginBottom: 10}}>
        <AppInput
          placeholder="شماره موبایل خود را وارد کنید"
          keyboardType={'numeric'}
          onChange={onForm}
        />
        {err && <AppText variant="error">{err}</AppText>}
      </AppView>
    </AuthLayout>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
});

export default Authentication;
