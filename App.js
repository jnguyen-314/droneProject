import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HourlyrentalScreen from './modules/HourlyrentalScreen';
import HowtoRide from './modules/HowToRide';
import TermsScreen from './modules/TermsScreen'

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{width: 400, height: 600}} source={require('./assets/droneRental3.png')}/>
            <Text style={styles.textBold}>
                Boston Drone Rental
            </Text>
            <Text style={styles.text}>
                At Boston Drone, we offer an option of a day or two of renting our drones in
                the Bunker Hill Community College Area.
            </Text>
        </View>
    );
}


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                    name="Home" component={HomeScreen} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Hourly Rental',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-cash" color={color} size={size} />
                        ),
                    }}
                    name="Hourly Rental" component={HourlyrentalScreen} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'How to Ride',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="quadcopter" color={color} size={size} />
                        ),
                    }}
                    name="How to Ride" component={HowtoRide} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Terms',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="file-document" color={color} size={size} />
                        ),
                    }}
                    name="Terms" component={TermsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
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












/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{width: 400, height: 600}} source={require('./assets/droneRental3.png')}/>
            <Text style={styles.textBold}>
                Boston Drone Rental
            </Text>
            <Text style={styles.text}>
                At Boston Drone, we offer an option of a day or two of renting our drones in
                the Bunker Hill Community College Area.
            </Text>
        </View>
    );
}

function HourlyRental({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

function HowToRide({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

function Terms({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Hourly Rental" component={HourlyRental} />
                <Drawer.Screen name="How To Ride" component={HowToRide} />
                <Drawer.Screen name="Terms" component={Terms} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
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
*/


/*
import * as React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
      <View style={styles.container}>
          <Image style={{width: 400, height: 600}} source={require('./assets/droneRental3.png')}/>
          <Text style={styles.textBold}>
              Boston Drone Rental
          </Text>
          <Text style={styles.text}>
              At Boston Drone, we offer an option of a day or two of renting our drones in
              the Bunker Hill Community College Area.
          </Text>
          <Button title="Daily Rentals" onPress={() =>
              navigation.navigate('Daily Rentals')}/>
          <Text></Text>
          <Button title="Terms" onPress={() =>
              navigation.navigate('Terms')}/>
      </View>
  );
}

function DetailsScreen({navigation}) {
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
    );
}

function TermScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textBold}>
                Terms
            </Text>
            <Text style={styles.text}>
                All rentals will include training as to the operation, etiquette and droning of the Drones. Cameras will be provided.
                Renter must be 21 or older and have proper ID. Reserving ahead is highly recommended.
            </Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Boston Drones" component={HomeScreen} />
            <Stack.Screen name="Daily Rentals" component={DetailsScreen} />
            <Stack.Screen name="Terms" component={TermScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

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
});

*/


/*
import {StatusBar} from 'expo-status-bar';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.viewContainer}>
                <Image style={{width: 400, height: 600}} source={require('./assets/droneRental3.png')}/>
                <Text style={styles.textBold}>
                    Boston Drone Rental
                </Text>
                <Text style={styles.text}>
                    At Boston Drone, we offer an option of a day or two of renting our drones in
                    the Bunker Hill Community College Area.
                </Text>
                <Text style={styles.textBold}>
                    Daily Rentals (1 Day = $125 - 2 Days = $200)
                </Text>
                <Text style={styles.text}>
                    For those who want to the "Sky View Experience" without the constraints of a Google Earth view.
                    There are plenty of areas to explore around the BHCC area. Make it an experience to see before and after your "Flight".
                </Text>
                <Text style={styles.textBold}>
                    Terms
                </Text>
                <Text style={styles.text}>
                    All rentals will include training as to the operation, etiquette and droning of the Drones. Cameras will be provided.
                    Renter must be 21 or older and have proper ID. Reserving ahead is highly recommended.
                </Text>

            </ScrollView>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewContainer: {
      padding: 15,
    },

    text: {
        fontSize: 20,
        paddingBottom: 30

    },

    textBold: {
        fontSize: 24,
        fontWeight: "bold"
    }
});

 */