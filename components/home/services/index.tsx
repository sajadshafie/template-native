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
      <View style={style.container_services}>
        {ServicesItems.map((v: servicesType, i: number) => {
          return (
            <AppView style={style.item_service} key={i}>
              <MaterialCommunityIcons
                name={v.iconName}
                size={30}
                color={Color.main_bg}
              />
              <AppText variant="caption_main" style={{textAlign: 'center'}}>
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
    backgroundColor: Color.light_box,
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
  },
});

export default Services;
