import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ShopItem } from '../components/ShopItem.js';
import { getDatas } from '../ItemJson/Items.js';

export function ItemList ({navigation}) {

  function renderItem({item: shopitem}) {
    return (
      <ShopItem {...shopitem} 
      onPress={() => {
        navigation.navigate('ItemDetails', {
          shopId: shopitem.itemId,
        });
      }}
      />
    );
  }
  
  const [shopitems, setItems] = useState([]);
  
  useEffect(() => {
    setItems(getDatas());
  });
  
  return (
    <FlatList
      keyExtractor={(item) => item.itemId.toString()}
      data={shopitems}
      renderItem={renderItem}
    />
  );
}



