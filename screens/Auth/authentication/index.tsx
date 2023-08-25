import React, { useState } from 'react';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import { ButtonOpacity } from '../../../common/AppButton';
import { StyleSheet } from 'react-native'
import NavigationProps from '../../../types/navigation';
import AppImage from '../../../common/AppImage';
import AppInput from '../../../common/AppInput';
const Authentication: React.FC<NavigationProps> = props => {
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState<null | string>(null)
  const [phone, setPhone] = useState('')
  const onForm = (v: string) => {
    setPhone(v)
  }

  const onRegister = () => {
    if (phone.length == 10) {
      setErr(null)
      setLoading(true)
      setTimeout(() => {
        props.navigation.navigate('/confirm', { phone: phone })
        setLoading(false)
      }, 2000)
    } else if (phone.length == 0) {
      setErr("شماره تلفن نمیتواند خالی باشد")
    } else if (phone.length > 10 || phone.length < 10) {
      setErr('شماره تلفن معتبر نمی باشد')
    }
  }

  return (
    <AppView style={style.container}>
      <AppImage
        source={require('../../../assets/images/download.jpg')}
      />
      <AppText
        style={{ marginBottom: 10 }}

        is_bold
        variant='h4'
      >
        به ماهر خوش امدید
      </AppText>
      <AppText style={{ textAlign: "right" }} variant='sub' >
        لطفا شماره موبایل خود را وارد کنید.چنانچه شماره تلفن وارد شده معتبر باشد برای شما پیامکی ارسال میگردد.
      </AppText>
      <AppView style={{ marginTop: 20, width: "100%", marginBottom: 10 }}>
        <AppInput placeholder='شماره موبایل خود را وارد کنید' keyboardType={'numeric'} onChange={onForm} />
        {err && <AppText variant='error'>{err}</AppText>}
      </AppView>
      <ButtonOpacity
        loading={loading}
        text='ثبت نام'
        onPress={onRegister}
      />
    </AppView>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center"
    , padding: 20,
    flex: 1
  }
})

export default Authentication;
