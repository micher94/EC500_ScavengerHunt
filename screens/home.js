import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import customData from '../bostonclients.json';
import clients from '../clientlist.json'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    bigBlue: {
        marginBottom: 25,
        color: '#4f4f4f',
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent: "center",
    },
    subtitle: {
        marginBottom: 5,
        color: '#4f4f4f',
        fontSize: 25,
        justifyContent: "center",
    },
    companybox: {
        flex: 0.3,
        marginTop: 45,
        paddingVertical: 15,
        paddingHorizontal: 60,
        backgroundColor: '#b5e4ff',
        borderRadius: 20,
    },
    companyname: {
        color: '#4f4f4f',
        fontSize: 28,
        fontWeight: 'bold',
        justifyContent: "space-evenly",
        alignItems: "stretch",
    },
    red: {
        color: 'red',
    },
});

export default function Home({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Map')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.bigBlue}>Check out available coupons
                {'\n'}
                Filter your locations here:</Text>
            <FlatList
                data={clients}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.companybox} onPress={() => navigation.navigate('Map', item)}>
                        <Text style={styles.companyname} > { item.Company }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
