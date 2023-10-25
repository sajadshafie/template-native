import React, {useRef} from 'react';
import AppView from '../../common/AppView';
import AppFlatList from '../../common/AppFlatlist';
import ItemRender from './items';
import CardProduct from './cardproduct';
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
        <CardProduct
          last_index={index == ItemRender.length - 1}
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
    <AppView style={{height: 360, marginTop: 20}}>
      <AppFlatList
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        horizontal
        data={ItemRender}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 5}}
        getItemLayout={(data, index) => ({
          length: 360,
          offset: 360 * index,
          index,
        })}
      />
    </AppView>
  );
};

export default CardRender;
