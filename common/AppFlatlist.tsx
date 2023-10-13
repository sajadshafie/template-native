import React from 'react';
import {FlatList, FlatListProps, SafeAreaView} from 'react-native';

type DynamicFlatListProps<T> = FlatListProps<T>;

const AppFlatList = <T extends any>(props: DynamicFlatListProps<T>) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList {...props} />
    </SafeAreaView>
  );
};

export default AppFlatList;
