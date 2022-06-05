import React from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native';
const QuantityButton = ({quantity, setQuantity}) => {
    const minus = () => {
        setQuantity(Math.max(0, quantity - 1));
    };

    const plus = () => {
        setQuantity(quantity + 1);
    };

    return (
        <View style={styles.root}>
            <Pressable style={styles.button} onPress={minus}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
 
            <Text style={styles.count}>{quantity}</Text>

            <Pressable style={styles.button} onPress={plus}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 140,
        height: 80,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e6dde',

    },
    buttonText: {
        fontSize: 25,
        color: '#ffff'
    },
    count: {
        fontSize: 18,
    }
})

export default QuantityButton;