
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ItemContext } from '../ItemContext';
export function CartDet({navigation}) {
  const {getItemsCount} = useContext(ItemContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('ShopCart');
        }}
      >View Cart ({getItemsCount()})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'green',
    height: 40,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
