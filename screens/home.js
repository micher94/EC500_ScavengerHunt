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
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: "center",
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
                    <TouchableOpacity onPress={() => navigation.navigate('Map', item)}>
                        <Text>{item.Company}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title='See All' onPress={pressHandler} />
        </View>
    );
}