import React, {useEffect, useRef} from 'react';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native';
import {GlobalStyle} from '../../../globals/style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Color} from '../../../constant';
import InputSearch from '../../../libs/search_input';
import Services from '../../../components/home/services';
import CardRender from '../../../components/CardRender';
import AppScrollView from '../../../common/AppScrollView';
import ImageCard from '../../../libs/imagecard';
import globals from '../../../globals';

const Home: React.FC = () => {
  const refrence = useRef<any>(new Animated.Value(0)).current;
  const content = useRef<any>(new Animated.Value(150)).current;

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent.contentOffset.y > 50) {
      globals.AnimateRenderTime(refrence, -50, 200);
      globals.AnimateRenderTime(content, 100, 200);
    } else {
      globals.AnimateRenderTime(refrence, 0, 300);
      globals.AnimateRenderTime(content, 150, 300);
    }
  };

  return (
    <AppView style={{flex: 1, position: 'relative'}}>
      <Animated.View
        style={[
          GlobalStyle.p_1,
          {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 200,
            transform: [{translateY: refrence}],
          },
        ]}>
        <AppView
          style={[style.container_header, GlobalStyle.mb_1, GlobalStyle.p_1]}>
          <AppText variant="h4">صفحه اصلی</AppText>
          <MaterialCommunityIcons
            name="bell-outline"
            color={Color.text_color}
            size={26}
          />
        </AppView>
        <InputSearch placeholder="جستجوی سرویس مورد نظر" />
      </Animated.View>
      <Animated.View style={{flex: 1, transform: [{translateY: content}]}}>
        <AppScrollView style={{marginBottom: 100}} onScroll={onScroll}>
          <AppView style={GlobalStyle.full}>
            <Services />
            <AppView style={GlobalStyle.my_3}>
              <AppText variant="h5" is_bold style={GlobalStyle.ml_1}>
                پر بازدید ترین خدمات
              </AppText>
              <CardRender />
            </AppView>

            <AppView style={[GlobalStyle.my_3, GlobalStyle.px_1]}>
              <ImageCard
                themeColor={Color.box_red}
                circleColor={Color.box_yellow}
                title="سرویس تمیز کردن راه پله"
                description="سرویس تمیز کردن راه پله با کادری مجرب و بسیار با دقت"
                icon={
                  <Entypo name="bucket" color={Color.light_white} size={55} />
                }
              />
            </AppView>
            <AppView style={[GlobalStyle.mb_3, GlobalStyle.px_1]}>
              <ImageCard
                buttonVariant="contained"
                themeColor={Color.green}
                circleColor={Color.orange}
                title="نظافت شرکت ها و دفاتر"
                description="بهترین سرویس هارا با ما تجربه کنید پرطرفدارترین سرویس"
                icon={
                  <MaterialCommunityIcons
                    name="broom"
                    color={Color.light_white}
                    size={55}
                  />
                }
              />
            </AppView>
            <AppView style={[GlobalStyle.mb_3, GlobalStyle.px_1]}>
              <ImageCard
                darkText
                buttonVariant="outlined"
                themeColor={Color.lemon}
                circleColor={Color.purpel}
                title="سرویس شیشه های ساختمان"
                description="سرویسی ویژه با مجرب ترین کادر ایران"
                icon={
                  <MaterialCommunityIcons
                    name="city"
                    color={Color.main_bg}
                    size={55}
                  />
                }
              />
            </AppView>
          </AppView>
        </AppScrollView>
      </Animated.View>
    </AppView>
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
