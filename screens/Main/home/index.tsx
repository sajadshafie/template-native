import React from 'react';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import {StyleSheet} from 'react-native';
const Home: React.FC = () => {
  return (
    <AppView style={style.container}>
      <AppText text="Home Page" />
    </AppView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
