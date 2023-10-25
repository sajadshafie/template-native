import React from 'react';
import AppView from '../../../../common/AppView';
import AppScrollView from '../../../../common/AppScrollView';
import Header from '../../../../components/profile/header';
import Options from '../../../../components/profile/options';
import {
  GeneralItems,
  OptionItems,
} from '../../../../components/profile/options/items';
import NavigationProps from '../../../../types/navigation';
import {profileOptionTypes} from '../../../../types/global';

const Main: React.FC<Partial<NavigationProps>> = props => {
  const onPressItem = (v: profileOptionTypes) => {
    props.navigation?.navigate(v.route, {title: v.title});
  };
  return (
    <AppView style={{flex: 1}}>
      <AppScrollView>
        <Header />
        <Options
          items={OptionItems}
          title="اطلاعات کاربری"
          onPressItem={onPressItem}
        />
        <Options items={GeneralItems} title="عمومی" />
      </AppScrollView>
    </AppView>
  );
};

export default Main;
