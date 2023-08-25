import React from 'react';
import { Text } from 'react-native';
import { Color } from '../constant';

type Props = {
  children?: string;
  style?: object;
  is_bold?: boolean,
  variant?: string

};

const AppText: React.FC<Props> = props => {
  const renderVariant = () => {


    let res
    if (props.variant == 'h1') {
      res = 38
    } else if (props.variant == 'h2') {
      res = 32
    } else if (props.variant == 'h3') {
      res = 28
    } else if (props.variant == 'h4') {
      res = 22
    } else if (props.variant == 'h5') {
      res = 16
    } else if (props.variant == 'h2') {
      res = 12
    }
    return res
  }

  return <Text style={[{ color: props.variant == 'sub' ? '#a5a5a5' : props.variant == 'error' ? '#e63946' : Color.text_color, fontFamily: props.is_bold ? 'IRANSansXBold' : 'IRANSansXRegular', fontSize: renderVariant() }, props.style]}>{props.children}</Text>;
};



export default AppText;
