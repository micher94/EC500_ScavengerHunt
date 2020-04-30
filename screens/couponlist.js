import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import DialogManager, { ScaleAnimation, DialogContent } from 'react-native-dialog-component';
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
        marginBottom:25,
        color: '#4f4f4f',
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent: "center",
    },
    couponBox: {
        flex: 0.3,
        marginTop: 45,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#d8bdff',
        borderRadius: 20,
    },
    couponText: {
        color: '#4f4f4f',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: "space-evenly",
        alignItems: "stretch",
    },
    red: {
        color: 'red',
    },
});
export default function Coupons({ navigation }) {
    const Images = [
        { uri: "https://i.imgur.com/sNam9iJ.jpg" },
        { uri: "https://i.imgur.com/N7rlQYt.jpg" },
        { uri: "https://i.imgur.com/UDrH0wm.jpg" },
        { uri: "https://i.imgur.com/Ka8kNST.jpg" }
    ]
    const useCoupon = (item) => {
        if (item.Used == 0) {
            item.Used = 1
            DialogManager.show({
                title: item.Company,
                titleAlign: 'center',
                animationDuration: 200,
                ScaleAnimation: new ScaleAnimation(),
                children: (
                    <DialogContent>
                        <View>
                            <Image
                                source={Images[0]}
                            />
                            <View>
                                <Text>
                                    Would you like to use this coupon?
                                </Text>
                                <Button title='confirm' onPress={() => { navigation.navigate('Home'), DialogManager.dismiss() }}></Button>
                            </View>
                        </View>
                    </DialogContent>
                ),
            },
            );
        }
        else {
            item.Used = 1
            DialogManager.show({
                title: item.Company,
                titleAlign: 'center',
                animationDuration: 200,
                ScaleAnimation: new ScaleAnimation(),
                children: (
                    <DialogContent>
                        <View>
                            <Text>
                                I'm sorry you've used this coupon.
                            </Text>
                        </View>
                    </DialogContent>
                ),
            },
            );
        }
    }
    //onDismissed: navigation.navigate('Home'),
    couponData = customData.filter((item) => item.Company == navigation.getParam('company'))
    return (
            <View style={styles.container}>
                <Text style={styles.bigBlue}>Available Coupons</Text>
                <FlatList
                    data={couponData}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                        style={styles.couponBox}
                        onPress={() => useCoupon(item)}>
                            <Text style={styles.couponText}>Coupon ID: {item.ID}, Coupon: {item.Coupon}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
}