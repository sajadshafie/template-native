import React, {useState} from 'react';
import AppView from '../../common/AppView';
import AppText from '../../common/AppText';
import {ButtonOpacity} from '../../common/AppButton';
import {StyleSheet} from 'react-native';
import AppImage from '../../common/AppImage';

type authLayoutTypes = {
  title: string;
  description: string;
  children: React.ReactNode;
  loading: boolean;
  onSubmit: () => void;
  textbutton: string;
};

const AuthLayout: React.FC<Partial<authLayoutTypes>> = props => {
  return (
    <AppView style={style.container}>
      <AppImage source={require('../../assets/images/download.jpg')} />
      <AppText style={{marginBottom: 10}} is_bold variant="h4">
        {props.title}
      </AppText>
      <AppText variant="caption" style={{width: '100%'}}>
        {props.description}
      </AppText>
      {props.children}
      <ButtonOpacity
        loading={props.loading}
        text={props.textbutton}
        onPress={props.onSubmit}
      />
    </AppView>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
});

export default AuthLayout;
