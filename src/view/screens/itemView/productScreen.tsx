import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import product from '../home/data/product';
import styles from './styles';

const ProductScreen = () => {
  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>

      {/* image carousle */}

      {/* option selector */}
      <Picker>
        {product.options.map((option) => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* price */}
      <Text style={styles.price}>₱{product.price}</Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* quantity selector */}

      {/* button */}
    </View>
  );
};

export default ProductScreen;
