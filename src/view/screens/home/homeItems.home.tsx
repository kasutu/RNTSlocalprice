<<<<<<< Updated upstream
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    navigation.navigate('ProductDetails', { id: item.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.rightDetails}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratings}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <AntDesign
              key={`${item.id} - ${i}`}
              style={styles.star}
              name={i < item.rating ? 'star' : 'stars'}
              size={18}
              color={'#e47911'}
            />
          ))}

          <Text>{item.rating}</Text>
        </View>
        <Text style={styles.price}>₱{item.price}</Text>
      </View>
    </Pressable>
  );
};

export default HomeItems;
=======
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    navigation.navigate('ProductDetails', { id: item.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.rightDetails}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratings}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <AntDesign
              key={`${item.id} - ${i}`}
              style={styles.star}
              name={i < item.rating ? 'star' : 'stars'}
              size={18}
              color={'#e47911'}
            />
          ))}

          <Text>{item.rating}</Text>
        </View>
        <Text style={styles.price}>₱{item.price}</Text>
      </View>
    </Pressable>
  );
};

export default HomeItems;
>>>>>>> Stashed changes
