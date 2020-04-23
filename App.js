import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Image, Dimensions,ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker } from 'react-native-maps';
import customData from './bostonclients.json';



export default
    class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    getData() {
        console.log('Data is fetching')
        fetch("https://covid-19-data.p.rapidapi.com/country/all?format=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "14569dc2bemshda7b04ec842b239p123fb9jsnbb792e420f63"
            }
        })
            //        fetch("https://api.covid19api.com/summary")
            .then((response) => response.json())
            .then((responseJson) => {
                dataSource2 = responseJson,
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson,
                    });
                // console.log(dataSource2)
                // console.log(typeof dataSource2[0].latitude)
                // console.log(dataSource2.Countries[0].TotalConfirmed)
                // console.log(dataSource)
                console.log('I am done')
            })
            .catch((error) => {
                console.error(error);
            });
    };

    componentDidMount() {
        this.getData();
    }

    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
    }


    render() {
        if (this.state.isLoading) {
            return (
                <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: 42.361145,
                        longitude: -71.057083,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
            )
        }
        else if (!this.state.isLoading) {
            return (
                console.log(customData),
                console.log(customData[1].Location.Latitude),
                console.log(customData[1].Location.Longitude),
                <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: 42.361145,
                        longitude: -71.057083,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}>
                    {customData.map((marker, index) => {
                        if (marker.Location.Latitude != null) {
                            return (
                                <MapView.Marker key={index} coordinate={{ latitude: marker.Location.Latitude, longitude: marker.Location.Longitude }}
                                    title={marker.Labels[0]}>
                                    <View style={styles.marker} />
                                    <MapView.Callout tooltip style={styles.customView}>
                                        <View style={styles.calloutText}>
                                            <Text>{marker.Coupon}</Text>
                                        </View>
                                    </MapView.Callout>
                                </MapView.Marker>
                            );
                        }
                    })}
                </MapView>
            )
        }
    };
}
const styles = StyleSheet.create({
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(130,4,150, 0.9)",
    },
    customView: {
        width: 50,
        height: 50,
        borderRadius: 4,
        backgroundColor: "rgba(130,4,150, 0.9)",
    },
    calloutText: {
        fontSize: 16
    },
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        height: 50,
        width: 50,
        overflow: "hidden",
        
    }
});