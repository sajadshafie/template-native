import React from 'react';
import AppView from '../../common/AppView';
import {imageCardTypes} from '../../types/global';
import {StyleSheet, View} from 'react-native';
import AppText from '../../common/AppText';
import {ButtonPresable} from '../../common/AppButton';
import {GlobalStyle} from '../../globals/style';
import {Color} from '../../constant';

const ImageCard: React.FC<Partial<imageCardTypes>> = props => {
  return (
    <AppView style={{...style.container, backgroundColor: props.themeColor}}>
      <View style={style.content_container}>
        <AppView style={{backgroundColor: 'transparent'}}>
          <AppText
            variant="h5"
            is_bold
            style={[
              {color: props.darkText ? Color.main_bg : Color.light_white},
              GlobalStyle.mb_1,
            ]}>
            {props.title}
          </AppText>
          <AppText
            variant="caption_main"
            style={{color: props.darkText ? Color.main_bg : Color.light_white}}>
            {props.description}
          </AppText>
        </AppView>
        <ButtonPresable
          textVariant="caption_main"
          variant={props.buttonVariant ? props.buttonVariant : 'contained'}
          text="مشاهده جزییات"
        />
      </View>

      <View style={style.container_circle}>
        <AppView
          style={{
            ...style.circle1,
            backgroundColor: props.circleColor,
          }}
        />
        <AppView
          style={{...style.circle2, backgroundColor: props.circleColor}}
        />
        <AppView
          style={{...style.circle3, backgroundColor: props.circleColor}}
        />
        <AppView
          style={{
            ...style.box_icon,
            borderColor: props.darkText ? Color.main_bg : Color.light_white,
          }}>
          {props.icon}
        </AppView>
      </View>
    </AppView>
  );
};

const style = StyleSheet.create({
  container: {
    height: 180,
    padding: 8,
    width: '100%',
    alignItems: 'center',
    borderRadius: 12,

    position: 'relative',
    flexDirection: 'row',
  },
  content_container: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-between',
  },
  image: {
    width: '50%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  linear_container: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  container_circle: {
    width: '50%',
    position: 'relative',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle1: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 10,
    top: 20,
    borderRadius: 100,
  },
  circle2: {
    position: 'absolute',
    width: 65,
    height: 65,
    right: 0,
    top: 20,
    borderRadius: 60,
  },
  circle3: {
    position: 'absolute',
    width: 15,
    height: 15,
    right: 100,
    bottom: 10,
    borderRadius: 20,
  },
  box_icon: {
    borderRadius: 100,
    padding: 20,
    backgroundColor: 'transparent',

    borderWidth: 4,
  },
});

export default ImageCard;
