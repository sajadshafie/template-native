import React from 'react';
import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';



type scrollType = {
  children: React.ReactNode;
};

const AppScrollView: React.FC<Partial<scrollType>> = props => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.scrollView}>{props.children}</ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, paddingTop: 20},
  scrollView: {
    backgroundColor: 'white',
  },
});

export default AppScrollView;
