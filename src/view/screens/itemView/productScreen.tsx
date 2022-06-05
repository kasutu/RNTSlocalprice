import React, { useState } from 'react';
import { View, Text } from 'react-native';
import product from '../home/data/product';
import styles from './styles';
import QuantityButton from './quantityButton';
import { Box, Center } from 'native-base';
import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import HomeIconButtonsFooter from '../../general/footer/home.iconButtons.footer';
import ImageScroll from './imageScroll';
import { HomeSearch } from '../home/searchButton.home';

const ProductScreen = (navigation: any) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Box marginTop={'5'}>
        <HomeSearch />
      </Box>

      <View>
        {/* title */}
        <Text style={styles.title}>{product.title}</Text>

        {/* image carousle */}
        <ImageScroll images={product.images} />

        {/* price */}
        <Text style={styles.price}>₱{product.price}</Text>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/* quantity selector */}
        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      </View>
      {/* button */}
      <Center>
        <HollowAndSolidButton
          hollowButtonValue="Buy Now"
          solidButtonValue="Add to Cart"
        />
      </Center>
      <HomeIconButtonsFooter navigation={navigation} />
    </>
  );
};

export default ProductScreen;
