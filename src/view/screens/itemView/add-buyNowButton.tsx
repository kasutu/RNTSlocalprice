import React from "react";
import {Text, Pressable, StyleSheet} from 'react-native'

interface  ButtonProps {
    text: string;
    onPress: () => {};
}

const Button = ({text, onPress}: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#a76bdb',
        height: 50,
        width: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center'
    },
    text: {
        fontSize: 17
    }
})

export default Button;