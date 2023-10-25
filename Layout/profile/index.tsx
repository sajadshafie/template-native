import React, {useRef} from 'react';
import AppView from '../../common/AppView';
import {
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native';
import AppScrollView from '../../common/AppScrollView';
import {Color} from '../../constant';
import {GlobalStyle} from '../../globals/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppText from '../../common/AppText';
import LinearGradient from 'react-native-linear-gradient';
import globals from '../../globals';
type propstTypes = {
  title: string;
  children: React.ReactNode;
};

const ProfileLayout: React.FC<Partial<propstTypes>> = props => {
  const anim = useRef<any>(new Animated.Value(0));

  const onScrollView = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent.contentOffset.y > 40) {
      globals.AnimateRenderTime(anim, -50, 300);
    }
  };

  return (
    <AppView style={style.container}>
      <AppView style={style.baner_container}>
        <LinearGradient
          style={style.circle1}
          colors={['rgb(63, 197, 182)', 'rgb(53, 169, 155)']}
        />
        <LinearGradient
          style={style.circle2}
          colors={['rgb(63, 197, 182)', 'rgb(53, 169, 155)']}
        />
        <LinearGradient
          colors={['rgb(63, 197, 182)', 'rgb(53, 169, 155)']}
          style={style.circle3}
        />
        <AppText
          variant="h3"
          is_bold
          style={{color: Color.light_white, marginTop: 60}}>
          پروفایل
        </AppText>
        <AntDesign name="left" color={Color.light_white} size={26} />
      </AppView>
      <Animated.View
        style={{
          ...style.container_scroll,
          transform: [{translateY: -50}],
        }}>
        <AppScrollView
          onScroll={onScrollView}
          style={[GlobalStyle.px_2, style.scroll]}>
          <AppView style={style.container_content}>{props.children}</AppView>
        </AppScrollView>
      </Animated.View>
    </AppView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  baner_container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Color.green,
    height: 200,
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
  },
  scroll: {
    flex: 1,
  },
  container_scroll: {
    backgroundColor: Color.light_white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    flex: 1,
    marginTop: -50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 16,
  },
  container_content: {
    flex: 1,
    zIndex: 50,
    height: '100%',
  },
  circle1: {
    position: 'absolute',
    width: 175,
    height: 175,
    left: -50,
    top: -70,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  circle2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    position: 'absolute',
    width: 265,
    height: 265,
    right: -100,
    top: -120,
    borderRadius: 265,
  },
  circle3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    position: 'absolute',
    width: 85,
    height: 85,
    left: -40,
    bottom: 0,
    borderRadius: 90,
  },
});

export default ProfileLayout;
