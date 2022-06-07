import { Heading } from "native-base";
import React from "react";
import {Text, Pressable, StyleSheet} from 'react-native'
import { InputColor } from "../../general/colors/localprice.colors";

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
        margin: 10,
        height: 40,
        width: 350,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        fontSize: 17
    }
})

export default Button;