import React from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView } from 'react-native';
import products from '../home/data/cartData';
import CartItems from './cartItem';
import Button from './checkOutButton';

const CartScreen = () => {
  const totalPrice = products.reduce(
    (sumPrice, product) => sumPrice + product.item.price * product.quantity, 0); //use reduce function because we have an array- it reduce it to one value
  return (
    <>
      <View>
        <Text style={{fontSize: 30, color: 'black', fontWeight:'bold', textAlign: 'center', marginTop: 15}}>
          Subtotal ({products.length} items): 
          <Text style={{color: '#6e1bbf'}}> ₱{totalPrice}.00</Text>
        </Text>
        <Button text={'Check Out'} onPress={() => {return console.warn('Checkout successful');}} />
      </View>

        <View style={styles.page}>
          <FlatList
            data={products}
            renderItem={({ item }) => <CartItems cartProps={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 2
  }
});

export default CartScreen;
