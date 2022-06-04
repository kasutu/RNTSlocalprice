import React from 'react';
import { Text, View, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

interface ProductProps {
  item: {
    id: string;
    image: string;
    title: string;
    rating: number;
    price: number;
  };
}

const HomeItems = ({ item }: ProductProps) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.rightDetails}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratings}>
          {[0,0,0,0,0].map((el, i) => 
            <AntDesign
              key={`${item.id} - ${i}`}
              style={styles.star}
              name={i < item.rating ? 'star': 'staro'}
              size={18}
              color={'#e47911'}
            />
          )}

          <Text>{item.rating}</Text>
        </View>
        <Text style={styles.price}>₱{item.price}</Text>
      </View>
    </View>
  );
};

export default HomeItems;
