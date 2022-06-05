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
        // borderCorlor: '#d5c1f1',
        width: 130,
        height: 100,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8244d5',

    },
    buttonText: {
        fontSize: 25,
    },
    count: {
        fontSize: 18,
        color: '#ffff'
    }
})

export default QuantityButton;