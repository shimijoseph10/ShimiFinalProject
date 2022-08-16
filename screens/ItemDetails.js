import React, {useEffect, useState, useContext} from 'react';
import {
  Text,  
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet,
  TouchableOpacity
  } from 'react-native';
  import {  FAB,  } from 'react-native-paper'
import { getData } from '../ItemJson/Items';
import { ItemContext } from '../ItemContext';

export function ItemDetails({route}) {
  const { shopId } = route.params;
  const [shopitem, setShopItem] = useState({});
  const { addItemToCart } = useContext(ItemContext);
  
  useEffect(() => {
    setShopItem(getData(shopId));
  });
  
  function itemAddToCart() {
    addItemToCart(shopitem.itemId);
  }
  
  return (
    <SafeAreaView>
      <ScrollView>
      <TouchableOpacity style={styles.card}>
        <View style={styles.itemContainer}>
        <View style = {styles.detT}>
          <Text style={styles.header1,styles.left}>{shopitem.name}</Text>
          <Text style={styles.header1,styles.right}>$ {shopitem.price}</Text>
          </View>
          <Text style={styles.header3}>{shopitem.description}</Text>
          <Text style={styles.header3}>Manufacturer:{shopitem.manufacturer}</Text>
               <FAB
               onPress={itemAddToCart}
                    style={styles.fab}
                    small
                    icon="plus"
                    
                />
        </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   itemContainer: {
    padding: 20,
  },
  detT: { 
    flexDirection: 'row',
  },
  header1: {
    fontSize: 23,
  
  },
  header2: {
    fontSize: 17,
    textAlign:'center'
   
  },
  header3: {
    fontSize: 17,
    textAlign:'center' 
   
  },
  fab: {
    position: 'absolute',
    margin: 0,
    right: 14,
    bottom: 4,
    backgroundColor: '#219653'
},
  left: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  right: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign:'right',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    elevation: 1,
    marginVertical: 30,
  },
});
