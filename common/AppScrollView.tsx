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
import {Color} from '../constant';
type scrollType = {
  children: React.ReactNode;
  onScrollEndDrag: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  style: StyleProp<ViewStyle>;
  onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const AppScrollView: React.FC<Partial<scrollType>> = props => {
  return (
    <SafeAreaView style={[style.container, props.style]}>
      <ScrollView
        onScroll={props.onScroll}
        scrollEventThrottle={16}
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
    backgroundColor: Color.light_white,
  },
});

export default AppScrollView;
