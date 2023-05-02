import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                All rentals will include training as to the operation, etiquette and droning of the Drones. Cameras will be provided.
                Renter must be 21 or older and have proper ID. Reserving ahead is highly recommended.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        paddingBottom: 30

    },

    textBold: {
        fontSize: 24,
        fontWeight: "bold"
    }
})