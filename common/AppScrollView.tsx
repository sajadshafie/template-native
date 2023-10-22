import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

type scrollType = {
  children: React.ReactNode;
  onScrollEndDrag: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;

  style: StyleProp<ViewStyle>;
};

const AppScrollView: React.FC<Partial<scrollType>> = props => {
  return (
    <SafeAreaView style={[style.container, props.style]}>
      <ScrollView
        onScrollEndDrag={props.onScrollEndDrag}
        showsVerticalScrollIndicator={false}
        style={style.scrollView}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {flex: 1},
  scrollView: {
    backgroundColor: 'white',
  },
});

export default AppScrollView;
