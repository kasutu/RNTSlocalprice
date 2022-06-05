import { FlatList } from "native-base";
import React from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
// import styles from "./styles";

const ImageScroll = ({images}: {images: [string]}) => {
    const windowWidth = useWindowDimensions().width;

    return (
        <View style={styles.root}>
            <FlatList
            data={images}
            renderItem={({item}) => (
                <Image style={[styles.image, {width: windowWidth - 40}]} 
                source={{uri: item }} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWidth - 20}
            snapToAlignment={'center'}
            decelerationRate={'normal'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {

    },
    image: {
        margin: 11,
        height: 250,
        resizeMode: 'contain'
    },
})

export default ImageScroll;