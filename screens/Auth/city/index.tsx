import React, {useState} from 'react';
import AppView from '../../../common/AppView';
import AppText from '../../../common/AppText';
import InputSearch from '../../../libs/search_input';
import {GlobalStyle} from '../../../globals/style';
import CityRender from '../../../components/city/cityRender';
import {ItemCity} from '../../../components/city/cityRender/item';
import NavigationProps from '../../../types/navigation';
type propsType = {
  title: string;
  id: number;
};

const City: React.FC<NavigationProps> = props => {
  const [search, setSearch] = useState<string>('');
  const [cityData, setCityData] = useState<propsType[]>(ItemCity);
  const onSearch = (value: string) => {
    setSearch(value);
    if (value.length >= 1) {
      setCityData((state: propsType[]) => {
        return state.filter((v: propsType, i: number) => {
          return v.title.startsWith(value) && v;
        });
      });
    } else {
      setCityData(ItemCity);
    }
  };
  const onClearSearch = () => {
    setSearch('');
  };

  const onPressCity = () => {
    props.navigation.navigate('main');
  };

  return (
    <AppView style={[GlobalStyle.p_2, GlobalStyle.full]}>
      <AppText style={GlobalStyle.mb_2} variant="h4">
        کدام شهر هستید
      </AppText>
      <InputSearch
        value={search}
        onChange={onSearch}
        placeholder="شهر خود را جستجو کنید"
        onClear={onClearSearch}
      />
      <AppView
        style={{...GlobalStyle.divider, height: 3, marginVertical: 15}}
      />
      <AppText variant="h4">همه شهر ها</AppText>
      <CityRender data={cityData} onPress={onPressCity} />
    </AppView>
  );
};

export default City;
