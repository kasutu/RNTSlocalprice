import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        margin: 5,
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#ffff',
        borderColor: '#d5c1f1',
    },
    image: {
      flex: 2,
      height: 150,
      resizeMode: 'contain',
    },  
    rightDetails: {
        padding: 10,
        flex: 3, 
    },
    title: {
      fontSize: 18,
    },
    ratings: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#692abb"
    },
    star: {
        margin: 2,
    }
  });

  export default styles;