import React from 'react';
import {profileOptionTypes} from '../../../types/global';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Color} from '../../../constant';

const config = {
  color: Color.main_bg,
  size: 32,
};

export const OptionItems: profileOptionTypes[] = [
  {
    title: 'ویرایش اطلاعات کاربری',
    icon: <MaterialCommunityIcons name="account-edit" {...config} />,
    route: 'userinfo',
  },
  {
    title: 'لیست علاقه مندی',
    icon: <Ionicons name="heart-circle" {...config} />,
    route: 'shoping-list',
  },
  {
    title: 'متخصصین منتخب شما',
    icon: <Entypo name="users" {...config} />,
    route: 'shoping-list',
  },
];

export const GeneralItems: profileOptionTypes[] = [
  {
    title: 'تماس با پشتیبانی',
    icon: <MaterialIcons name="support-agent" {...config} />,
    route: 'support',
  },
  {
    title: 'انتقادات و پیشنهادات',
    icon: <MaterialIcons name="feedback" {...config} />,
    route: 'shoping-list',
  },
  {
    title: 'قوانین وشرایط استفاده',
    icon: <MaterialIcons name="list-alt" {...config} />,
    route: 'shoping-list',
  },
];
