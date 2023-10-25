import React from 'react';
import {StyleSheet} from 'react-native';
import AppView from '../../../common/AppView';
import Entypo from 'react-native-vector-icons/Entypo';
import {GlobalStyle} from '../../../globals/style';
import {Color} from '../../../constant';
import AppText from '../../../common/AppText';
const Header: React.FC = () => {
  return (
    <AppView style={[GlobalStyle.p_2, style.container]}>
      <AppView style={[style.image, GlobalStyle.mr_1]}>
        <Entypo name="user" color={'white'} size={26} />
      </AppView>
      <AppView style={style.container}>
        <AppText
          variant="h5"
          style={[GlobalStyle.mr_1, {color: Color.light_white}]}>
          سجاد
        </AppText>
        <AppText variant="h5" style={{color: Color.light_white}}>
          شفیعی
        </AppText>
      </AppView>
    </AppView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.green,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'transparent',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Color.light_white,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
