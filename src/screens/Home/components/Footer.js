import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import IconMater from "react-native-vector-icons/MaterialCommunityIcons";

function Footer(props) {

    const {
        navigation,
        route
    } = props || {};

    const {
        name: routeName
    } = route || {}

    return (
        <View style={{
            height: 50,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // borderTopWidth: 1,
            // borderTopColor: "gray",
            backgroundColor:'#fff'
        }}>
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                activeOpacity={0.5}
                onPress={() => {

                    navigation.navigate("Article");
                }}
            >
                <IconMater name="account-tie-outline" style={{
                    fontSize: 25,
                    color: routeName == "Article" ? "red" : "black"
                }}/>
                <Text style={{
                    fontSize: 12,
                    color: routeName == "Article" ? "red" : "black"
                }}>Articles</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                activeOpacity={0.5}
                onPress={() => {

                    navigation.navigate("Feed");
                }}
            >
                <IconAwe name="quote-left" style={{
                    fontSize: 20,
                    color: routeName == "Feed" ? "red" : "black"
                }}/>
                <Text style={{
                    fontSize: 12,
                    color: routeName == "Feed" ? "red" : "black"
                }}>Feeds</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;