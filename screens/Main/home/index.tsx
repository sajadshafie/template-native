import React from 'react';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import {StyleSheet} from 'react-native';
import {GlobalStyle} from '../../../globals/style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../../constant';
import AppImage from '../../../common/AppImage';
import InputSearch from '../../../libs/search_input';
import Services from '../../../components/home/services';
import CardRender from '../../../components/CardRender';
import AppScrollView from '../../../common/AppScrollView';

const Home: React.FC = () => {
  return (
    <AppScrollView>
      <AppView style={[GlobalStyle.full]}>
        <AppView
          style={[style.container_header, GlobalStyle.mb_1, GlobalStyle.p_1]}>
          <AppText variant="h4">صفحه اصلی</AppText>
          <MaterialCommunityIcons
            name="bell-outline"
            color={Color.text_color}
            size={26}
          />
        </AppView>
        <AppView style={GlobalStyle.p_1}>
          <InputSearch placeholder="جستجوی سرویس مورد نظر" />
        </AppView>
        <Services />
        <AppView style={GlobalStyle.my_3}>
          <AppText variant="h5" is_bold style={GlobalStyle.ml_2}>
            پر بازدید ترین خدمات
          </AppText>
          <CardRender />
        </AppView>
      </AppView>
    </AppScrollView>
  );
};

const style = StyleSheet.create({
  container_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Home;
