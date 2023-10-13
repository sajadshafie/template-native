import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View} from 'react-native';
import {Color} from '../../../constant';
import {tabType} from '../../../types';
import AppText from '../../../common/AppText';

const sizeIcon = 27;

interface tabRenderType extends tabType {
  focused: boolean;
}

const TabRender: React.FC<Partial<tabRenderType>> = props => {
  return (
    <View style={style.container_icon}>
      <Ionicons
        name={props.focused ? props.iconNameActive : props.iconNameDeactive}
        size={sizeIcon}
        color={'white'}
        style={props.focused ? style.icon_shadow : style.icon_default}
      />
      <AppText
        style={{
          color: props.focused ? Color.light_gray10 : Color.light_gray30,
          fontSize: 11,
        }}>
        {props.text}
      </AppText>
    </View>
  );
};
const style = StyleSheet.create({
  container_icon: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: 9,
  },
  icon_shadow: {
    textShadowColor: Color.shadow_icon,
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 2,
  },
  icon_default: {
    color: Color.light_gray30,
  },
});
export default TabRender;
