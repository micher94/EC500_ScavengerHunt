import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';


export default function Coupon({ navigation }) {
    const Images = [
        { uri: "https://i.imgur.com/sNam9iJ.jpg" },
        { uri: "https://i.imgur.com/N7rlQYt.jpg" },
        { uri: "https://i.imgur.com/UDrH0wm.jpg" },
        { uri: "https://i.imgur.com/Ka8kNST.jpg" }
    ]
    const displayCoupon = () => {
        //item.used = 1
        return (
            <View style={styles.container}>
                <Image
                    source={Images[0]}
                />
            </View>
        )
    }
}