import { useNavigation } from "@react-navigation/native";
import React from "react"
import { Pressable, View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const ShowLocationButton = () => {
    return (
        <View>
            <Pressable  style={styles.button}>
                <Text style={styles.buttonText}>Show Location</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e6dde',
        marginLeft: 180 
    },
    buttonText: {
        fontSize: 15,
        color: '#ffff'
    },
})

export default ShowLocationButton;