import React from 'react';
import {StyleSheet} from 'react-native';
import AppScrollView from '../../../common/AppScrollView';
import {ButtonOpacity} from '../../../common/AppButton';
import {Color} from '../../../constant';
import AppView from '../../../common/AppView';
import {GlobalStyle} from '../../../globals/style';

type propsType = {
  title: string;
  id: number;
};

type propsRender = {
  searchInput: string;
  data: propsType[];
  onPress: (v: propsType, i: number) => void;
};

const CityRender: React.FC<Partial<propsRender>> = props => {
  return (
    <AppScrollView>
      {props.data?.map((v: propsType, i: number) => {
        return (
          <AppView style={GlobalStyle.my_2} key={v.id}>
            <ButtonOpacity
              variant="contained"
              onPress={() => props.onPress && props.onPress(v, i)}
              text={v.title}
              key={v.id}
              styleButton={style.button_container}
              textVariant="h5"
              styleText={{color: Color.text_color}}
              styleView={{
                justifyContent: 'flex-start',
              }}
            />
            <AppView style={GlobalStyle.divider} />
          </AppView>
        );
      })}
    </AppScrollView>
  );
};

const style = StyleSheet.create({
  button_container: {
    backgroundColor: Color.light_white,
  },
});

export default CityRender;
