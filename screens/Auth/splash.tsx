import React, {useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import AppView from '../../common/AppView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {context} from '../../App';
import {Color} from '../../palette';

const Splash: React.FC = () => {
  const {state, setState} = useContext<any>(context);

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
      <AntDesign
        name="earth"
        size={50}
        color="white"
        style={{
          textShadowColor: '#faf9f9',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 3,
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
