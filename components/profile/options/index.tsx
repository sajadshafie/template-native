import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import AppView from '../../../common/AppView';
import {profileOptionTypes} from '../../../types/global';
import AppText from '../../../common/AppText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '../../../constant';
import {GlobalStyle} from '../../../globals/style';

type propsTypes = {
  title: string;
  items: profileOptionTypes[];
  onPressItem: (v: profileOptionTypes) => void;
};

const Options: React.FC<Partial<propsTypes>> = props => {
  return (
    <AppView style={GlobalStyle.p_2}>
      <AppView>
        <AppText variant="h5" is_bold style={GlobalStyle.mb_3}>
          {props.title}
        </AppText>
      </AppView>
      <AppView>
        {props.items?.map((v: profileOptionTypes, i: number) => {
          return (
            <Pressable
              onPress={() => props.onPressItem && props.onPressItem(v)}
              key={i}
              style={[style.item, GlobalStyle.mb_2]}>
              <AppView style={{flexDirection: 'row', alignItems: 'center'}}>
                {v.icon}
                <AppText style={GlobalStyle.ml_2} variant="h5">
                  {v.title}
                </AppText>
              </AppView>
              {v.route && (
                <AntDesign name="left" size={26} color={Color.box_yellow} />
              )}
            </Pressable>
          );
        })}
      </AppView>
    </AppView>
  );
};
const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Options;
