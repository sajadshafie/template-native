import {tabType} from '../../../types';
import Home from '../../../screens/Main/home';
import Profile from '../../../screens/Main/profile';
export const TabItems: tabType[] = [
  {
    text: 'خانه',
    iconNameActive: 'home',
    iconNameDeactive: 'home-outline',
    tabName: 'home',
    component: Home,
  },

  {
    text: 'سفارشات',
    iconNameActive: 'document-text',
    iconNameDeactive: 'document-text-outline',
    tabName: 'suggestions',
    component: Profile,
  },
  {
    text: 'شرکت ها',
    iconNameActive: 'business',
    iconNameDeactive: 'business-outline',
    tabName: 'companies',
    component: Profile,
  },
  {
    text: 'پروفایل',
    iconNameActive: 'person',
    iconNameDeactive: 'person-outline',
    tabName: 'profile',
    component: Profile,
  },
];
