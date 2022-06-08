import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        margin: 5,
        borderWidth: 2,
        borderRadius: 11,
        padding: 2,
        backgroundColor: '#ffff',
        borderColor: '#d5c1f1',
    },
    row: {
      flexDirection: 'row',
    },
    image: {
      flex: 2,
      height: 100,
      width: 100,
      resizeMode: 'contain',
    },  
    rightDetails: {
        padding: 5,
        flex: 4 
    },
    title: {
      fontSize: 18,
      color: 'black'
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#692abb"
    },
    location: {
      color: 'black'
    }
  });

  export default styles;