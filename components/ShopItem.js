import React from 'react';
import { View, StyleSheet,TouchableOpacity} from 'react-native';
import { Text, IconButton, TextInput, FAB, Button } from 'react-native-paper'
export function ShopItem({name,price, manufacturer,description, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.itemContainer}>
      <View style = {styles.detT}>
        <Text style={styles.header1, styles.left}>{name}</Text>
        <Text style={styles.header2,styles.right}>$ {price}</Text>
        </View>
        {/* <Text style={styles.price}>{manufacturer}</Text> */}
        <Text style={styles.header3}> {description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  header1: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  header2: {
    fontSize: 16,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    margin: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#219653'
},
  header3: {
    fontSize: 16,
    fontWeight: '400',
    textAlign:'center'
    
   
  },
  icon: {
    backgroundColor: '#0782F9',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10
},
  left: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  detT: { 
    flexDirection: 'row',
  },
  right: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
});
