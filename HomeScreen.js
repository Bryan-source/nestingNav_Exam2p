import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import styles from './styles/styles';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/homeheader.jpg')} resizeMode="contain" style={styles.image}/>

            <Text style={styles.text}>Aprovecha los mejores descuentos</Text>
            <Text style={styles.textDescription}>Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada.</Text>

            <Button
                title="Ir a la tienda"
                onPress={
                    () => navigation.navigate('Store')
                }     
            />
        </View>
    );
}


export default HomeScreen;

