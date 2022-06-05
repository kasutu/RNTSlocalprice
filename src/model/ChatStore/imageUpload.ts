import React, {useState, useEffect} from "react";
import {
    Image,
    View,
    Button,
} from "react-native";
import ImagePicker from "react-native-image-picker";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';




UserSelectImage = () => {
    ImagePicker.showImagePicker({ title: "Select an image", maxWidth: 700, maxHeight: 600 },
    (response) => {
        if (response.didCancel) {
            console.log("User cancelled image picker");
        } else if (response.error) {
            console.log("ImagePicker Error: ", response.error);
        } else {
            const source = { uri: response.uri };
            setSelectImage(source);
            pickedImage(response.uri);
        }
    });
}

