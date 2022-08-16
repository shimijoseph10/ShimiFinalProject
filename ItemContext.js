import React, {createContext, useReducer, useState} from 'react';

import { getData } from './ItemJson/Items.js';

export const ItemContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);
  function addItemToCart(id) {
    const product = getData(id);
    setItems((backItems) => {
      const item = backItems.find((item) => (item.id == id));
      if(!item) {
          return [...backItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return backItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
      
    });

  }
  function clearcart(){
     setItems([])
  
  }
  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }
  
  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice)  , 0);
  } 
  
  function getDiscountPrice() {
    return items.reduce((sum, item) =>
    { 
      
      if( sum + item.totalPrice > 100) {
      return ( sum + item.totalPrice ) - (  item.totalPrice * 0.2)
      }
      else  if(sum + item.totalPrice > 80 ){
        return ( sum + item.totalPrice ) - (  item.totalPrice * 0.15)
        
      }
      else  {
        return ( sum + item.totalPrice ) 
        
      }

    }
    , 0 );
    
}  
  
  return (
    <ItemContext.Provider 
      value={{ items, setItems, getItemsCount, clearcart, addItemToCart,clearcart, getTotalPrice, getDiscountPrice}}>
      {props.children}
    </ItemContext.Provider>
  );
}

