import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemList } from './screens/ItemList.js';
import { ItemDetails } from './screens/ItemDetails.js';
import { ShopCart } from './screens/ShopCart.js';
import { CartProvider } from './ItemContext.js';
import { CartDet } from './components/CartDet.js';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ItemList' component={ItemList} 
          options={({ navigation }) => ({
            title: 'ITEMS',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartDet navigation={navigation}/>
          })}/>
          <Stack.Screen name='ItemDetails' component={ItemDetails} 
          options={({ navigation }) => ({
            title: 'Item details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartDet navigation={navigation}/>,
          })} />
          <Stack.Screen name='ShopCart' component={ShopCart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartDet navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;
