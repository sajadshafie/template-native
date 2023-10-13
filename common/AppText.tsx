import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import {Vartiants} from './variants';
import {VariantTypes} from '../types/global';

type Props = {
  children: React.ReactNode;
  style: StyleProp<TextStyle>;
  is_bold: boolean;
  variant: VariantTypes['variant'];
};

const AppText: React.FC<Partial<Props>> = props => {
  const renderVariant = () => {
    const res = Vartiants.find(item => item.type == props.variant);
    return res;
  };

  return (
    <Text
      style={[
        {
          color: renderVariant()?.color,
          fontFamily: props.is_bold ? 'IRANSansXBold' : 'IRANSansFaNum',
          fontSize: renderVariant()?.size,
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

export default AppText;
