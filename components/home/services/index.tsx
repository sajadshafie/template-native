import React from 'react';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import {StyleSheet, View} from 'react-native';
import {Color} from '../../../constant';
import {GlobalStyle} from '../../../globals/style';
import {servicesType} from '../../../types/home';
import {ServicesItems} from './items';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Services: React.FC = () => {
  return (
    <AppView style={[style.container_box, GlobalStyle.p_2, GlobalStyle.mt_3]}>
      <AppText
        variant="h5"
        style={[{textAlign: 'center'}, GlobalStyle.mb_3]}
        is_bold>
        خدمات
      </AppText>
      <AppView style={style.circle1} />
      <AppView style={style.circle2} />
      <AppView style={style.circle3} />
      <View style={style.container_services}>
        {ServicesItems.map((v: servicesType, i: number) => {
          return (
            <AppView style={style.item_service} key={i}>
              <MaterialCommunityIcons
                name={v.iconName}
                size={30}
                color={Color.light_white}
              />
              <AppText
                variant="caption_main"
                style={{textAlign: 'center', color: Color.light_white}}>
                {v.label}
              </AppText>
            </AppView>
          );
        })}
      </View>
    </AppView>
  );
};

const style = StyleSheet.create({
  container_box: {
    position: 'relative',
    backgroundColor: Color.light_white,
  },
  container_services: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  item_service: {
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
    marginBottom: 16,
    padding: 8,
    backgroundColor: Color.main_bg,
  },
  circle1: {
    position: 'absolute',
    width: 40,
    height: 40,
    right: 10,
    top: 150,
    borderRadius: 100,
    backgroundColor: '#fbc4ab',
  },
  circle2: {
    position: 'absolute',
    width: 65,
    height: 65,
    left: 10,
    top: 20,
    borderRadius: 100,
    backgroundColor: '#fbc4ab',
  },
  circle3: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 150,
    bottom: 10,
    borderRadius: 100,
    backgroundColor: '#fbc4ab',
  },
});

export default Services;
