import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import product from '../home/data/product';
import styles from './styles';
import QuantityButton from './quantityButton';
import { useRoute } from '@react-navigation/native';
import { Box, Center } from 'native-base';
import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import HomeIconButtonsFooter from '../../general/footer/home.iconButtons.footer';
import ImageScroll from './imageScroll';
import { HomeSearch } from '../home/searchButton.home';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();
  console.log(route.params)

  return (
    <>
      <View>
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
          
        </View>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/* quantity selector */}
        <QuantityButton quantity={quantity} setQuantity={setQuantity}/>
      </View>

      {/* button */}
      <View>
      <Center marginTop={4}>
        <HollowAndSolidButton
          hollowButtonValue="Buy Now"
          solidButtonValue="Add to Cart"
        />
      </Center>
      </View>
    </>
  );
};

export default ProductScreen;
