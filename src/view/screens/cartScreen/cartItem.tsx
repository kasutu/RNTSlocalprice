import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import styles from './styles';
import QuantityButton from './quantityButton';

interface CartItemProps {
  cartProps: {
    id: string;
    quantity: number;
    item: {
      id: string;
      title: string;
      image: string;
      rating: number;
      price: number;
      location: string;
    };
  };
}

const CartItems = ({ cartProps }: CartItemProps) => {
  const { quantity: quantityProp, item } = cartProps;

  const [quantity, setQuantity] = useState(quantityProp);

  // const navigation = useNavigation<NativeStackNavigationProp<any>>();

  // const onPress = () => {
  //   navigation.navigate('ProductDetails', { id: item.id });
  // };
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.rightDetails}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          
          <Text style={styles.price}>₱{item.price}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
    </View>
  );
};

export default CartItems;
