import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.textBold}>
                Daily Rentals (1 Day = $125 - 2 Days = $200)
            </Text>
            <Text style={styles.text}>
                For those who want to the "Sky View Experience" without the constraints of a Google Earth view.
                There are plenty of areas to explore around the BHCC area. Make it an experience to see before and after your "Flight".
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