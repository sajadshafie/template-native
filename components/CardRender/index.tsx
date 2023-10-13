import React from 'react';
import AppView from '../../common/AppView';
import AppFlatList from '../../common/AppFlatlist';
import ItemRender from './items';
import Card from './card';
import {itemRenderCardTypes} from '../../types/home';
const CardRender: React.FC = () => {
  const renderItem = ({
    item,
    index,
  }: {
    item: itemRenderCardTypes;
    index: number;
  }): JSX.Element => {
    return (
      <React.Fragment key={index}>
        <Card
          ttile={item.ttile}
          image={item.image}
          description={item.description}
          rate={item.rate}
          likes={item.likes}
        />
      </React.Fragment>
    );
  };
  return (
    <AppView style={{height: 300, marginTop: 20, marginRight: 16}}>
      <AppFlatList
        horizontal
        data={ItemRender}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 5}}
      />
    </AppView>
  );
};

export default CardRender;
