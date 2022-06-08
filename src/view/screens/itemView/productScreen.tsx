import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import product from '../home/data/product';
import styles from './styles';
import QuantityButton from './quantityButton';
import { Center, HStack } from 'native-base';
import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import ImageScroll from './imageScroll';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ShowLocationButton from './showLocButton';
import Button from './add-buyNowButton';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <ScrollView>
        {/* image carousle */}
        <ImageScroll images={product.images} />

        {/* title */}
        <Text style={styles.title}>{product.title}</Text>

        {/* price */}
        <Text style={styles.price}>₱{product.price}</Text>

        {/* rating */}
        <View style={styles.ratings}>
          {[0,0,0,0,0].map((el, i) => 
            <AntDesign
              key={`${product.id} - ${i}`}
              style={styles.star}
              name={i < product.rating ? 'star': 'staro'}
              size={18}
              color={'#e47911'}
            />
          )}
          <Text>{product.rating}</Text>

          {/* locationButton */}
          <ShowLocationButton/>

        </View>

        {/* Location */}
        <Text style={styles.locationText}>{product.location}</Text>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/* quantity selector */}
          <QuantityButton quantity={quantity} setQuantity={setQuantity}/>
      </ScrollView>

      {/* button */}
      <Center>
        <HStack marginBottom={2} marginTop={2}space={5}>
          <Button text={'Buy Now'} onPress={() => {return console.warn('Buy Now');}} />
            <Button text={'Add to Cart'} onPress={() => {return console.warn('Added to Cart');}} />
        </HStack>
      </Center>
    </>
  );
};


export default ProductScreen;
