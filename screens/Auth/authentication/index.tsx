import React from 'react';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import {ButtonOpacity} from '../../../common/AppButton';
import NavigationProps from '../../../types/navigation';
const Authentication: React.FC<NavigationProps> = props => {
  return (
    <AppView>
      <AppText text="sdfsdf" />
      <ButtonOpacity
        text="Go to Tab Main"
        onPress={() => props.navigation.push('main')}
      />
    </AppView>
  );
};

export default Authentication;
