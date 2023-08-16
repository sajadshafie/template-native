import React from 'react';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import {StyleSheet} from 'react-native';
const Profile: React.FC = () => {
  return (
    <AppView style={style.container}>
      <AppText text="Profile Page" />
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

export default Profile;
