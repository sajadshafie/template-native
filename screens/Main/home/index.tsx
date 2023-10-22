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

const Home: React.FC = () => {
  const refrence = useRef(new Animated.Value(100)).current;
  const [scrollState, setScrollState] = React.useState<boolean>(false);
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    e.nativeEvent.contentOffset.y > 60
      ? setScrollState(true)
      : setScrollState(false);
  };

  useEffect(() => {
    Animated.spring(refrence, {
      toValue: -20,
      useNativeDriver: true,
    });
  }, [scrollState]);
  console.log(refrence);
  return (
    <AppView style={{flex: 1, position: 'relative'}}>
      <Animated.View
        style={[
          GlobalStyle.p_1,
          {
            position: 'absolute',
            top: refrence,
            left: 0,
            width: '100%',
            height: 200,
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
      <AppScrollView style={{marginTop: 150}} onScrollEndDrag={onScroll}>
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
              icon={<Entypo name="bucket" color={'white'} size={55} />}
            />
          </AppView>
          <AppView style={[GlobalStyle.mb_3, GlobalStyle.px_1]}>
            <ImageCard
              buttonVariant="contained"
              themeColor={'#2a9d8f'}
              circleColor={'#e76f51'}
              title="نظافت شرکت ها و دفاتر"
              description="بهترین سرویس هارا با ما تجربه کنید پرطرفدارترین سرویس"
              icon={
                <MaterialCommunityIcons
                  name="broom"
                  color={'white'}
                  size={55}
                />
              }
            />
          </AppView>
          <AppView style={[GlobalStyle.mb_3, GlobalStyle.px_1]}>
            <ImageCard
              darkText
              buttonVariant="outlined"
              themeColor={'#fefae0'}
              circleColor={'#cdb4db'}
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
