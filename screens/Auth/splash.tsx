import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AppView from '../../common/AppView';

import { context } from '../../App';
import { Color } from '../../constant';
import AppImage from '../../common/AppImage';
import AppText from '../../common/AppText';

const Splash: React.FC = () => {
  const { state, setState } = useContext<any>(context);

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        splash: false,
      });
    }, 3000);
  }, []);

  return (
    <AppView style={style.container}>
      <AppImage
        source={require('../../assets/images/per.png')}
        style={{
          height: 400,
          width: "100%"
        }}
      />
      <AppText
        is_bold
        text='ماهر'
        style={{
          fontSize: 50
          , color: "white"
        }}
      />
    </AppView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.main_bg,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
