import React from 'react';
import AppView from '../../common/AppView';
import {StyleSheet} from 'react-native';
import AppImage from '../../common/AppImage';
import {itemRenderCardTypes} from '../../types/home';
import AppText from '../../common/AppText';
import {GlobalStyle} from '../../globals/style';
import StarRating from 'react-native-star-rating-widget';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '../../constant';
const Card: React.FC<Partial<itemRenderCardTypes>> = props => {
  const onChangeRate = () => {};
  return (
    <AppView style={style.container}>
      <AppImage source={props.image} style={style.image} />
      <AppView style={GlobalStyle.p_1}>
        <AppText variant="caption_main" is_bold>
          {props.ttile}
        </AppText>
        <AppText variant="caption_main" style={GlobalStyle.mb_1}>
          {props.description}
        </AppText>
        <AppView
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
          <AppText variant="caption_main">میانگین نظرات</AppText>
          <StarRating
            rating={props.rate ? props.rate : 0}
            starSize={20}
            onChange={onChangeRate}
          />
        </AppView>
        <AppView style={{flexDirection: 'row', alignItems: 'center'}}>
          <AppText variant="caption_main">تعداد لایک توسط کاربران</AppText>
          <AppView style={style.container_like}>
            <AntDesign name="heart" color={'red'} />
            <AppText variant="h6" style={GlobalStyle.ml_1}>
              {props.likes}
            </AppText>
          </AppView>
        </AppView>
      </AppView>
    </AppView>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: 300,
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 2,
    // shadowOpacity: 0.18,
    // shadowRadius: 1.0,

    marginLeft: 16,
  },
  image: {
    objectFit: 'cover',
    height: 150,
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  container_like: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: Color.light_gray20,
    marginLeft: 10,
  },
});

export default Card;
