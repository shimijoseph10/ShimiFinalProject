import React, { useEffect, useState, useContext } from 'react';
import { View,FAB, Alert,Text, Button, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { ItemContext } from '../ItemContext';

export function ShopCart ({navigation}) {
  const {items, getItemsCount,clearcart, getTotalPrice, getDiscountPrice} = useContext(ItemContext);
  function Totals() {
    let [total, setTotal] = useState(0);
    let [totald, setTotald] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
      setTotald(getDiscountPrice());
    });
    return (
       <View style = {styles.cardList}>
          <Text style={[ styles.lineTotal]}>Total Amount(Before Discount) :</Text>
          <Text style={[ styles.lineTotal]}>$ {total}</Text>
          <Text style={[ styles.lineTotal]}>Total Amount(After Discount) :</Text>
          <Text style={[ styles.lineTotal]}>$ {totald}</Text>
       </View>
    );
  }

  function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
       </View>
  
    );
  }
  
  function clearcartItem() {
    clearcart();
  }
 
  const showAlert = () =>
  Alert.alert(
    "Success",
    "Successfully Purchased Item",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: clearcartItem,}
     
    ]
  );

  return (
    <TouchableOpacity style={styles.card}>
       <Button
           title="PURCHASE"
           onPress={showAlert}
          
           / >
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.itemId.toString()}
      ListFooterComponent={Totals}
    />
      <View style = {styles.cardList}>
       
       <Text style={[ styles.lineTotal]}>Discount Rate for Items</Text>
       <Text style={[ styles.lineTotal]}>80 or more : 15% discount</Text>
       <Text style={[ styles.lineTotal]}>100 or more : 20% discount</Text>
      
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardList: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
   
    elevation: 2,
    marginVertical: 30,
  },
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',  
    fontSize: 18,   
    padding: 10,
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
