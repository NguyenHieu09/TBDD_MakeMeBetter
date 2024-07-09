import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

//import icon
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Footer(props) {

    const {
        navigation,
        route,
        onSelectTab
    } = props || {};

    const {
        name: routeName
    } = route || {}
    const [selectedTab, setSelectedTab] = useState("ReadArticle");
    return (
        <View style={{height: 70,flexDirection: "row",justifyContent: "space-between",alignItems: "center",borderTopWidth: 1,borderTopColor: "#F2F2F2",
        bottom: 0,left: 0,right: 0, backgroundColor:'#fff'}}>
            <TouchableOpacity
                style={{flex: 1,flexDirection: "column",alignItems: "center",justifyContent: "center"}}
                activeOpacity={0.5}
                // onPress={() => {
                //     navigation.navigate("Motivation Quotes");
                // }}
                onPress={() => {
                    setSelectedTab("ReadArticle");
                    onSelectTab("ReadArticle"); // Xác định khi tab "Suggested" được nhấn
                    navigation.navigate("History"); // Chuyển đến màn hình "Suggested"
                }}
            >
                <FontAwesome5 name='book-reader' size={23} color={ selectedTab  == "ReadArticle" ? "red" : "#413F3F"}/>
                <Text style={{fontSize: 13, color: selectedTab  == "ReadArticle" ? "red" : "#413F3F"}}>Read Articles</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={{flex: 1,flexDirection: "column",alignItems: "center",justifyContent: "center"}}
                activeOpacity={0.5}
                // onPress={() => {

                //     navigation.navigate("Motivation Quotes");
                // }}
                onPress={() => {
                    setSelectedTab("LikedArticle");
                    onSelectTab("LikedArticle"); // Xác định khi tab "Quotes" được nhấn
                    navigation.navigate("History"); // Chuyển đến màn hình "Quotes"
                }}
            >
                <AntDesign name='heart' size={23} color={ selectedTab  == "LikedArticle" ? "red" : "#413F3F"}/>
                <Text style={{fontSize: 13,color: selectedTab  == "LikedArticle" ? "red" : "#413F3F"}}>Liked Articles</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{flex: 1,flexDirection: "column",alignItems: "center",justifyContent: "center"}}
                activeOpacity={0.5}
                // onPress={() => {

                //     navigation.navigate("Motivation Quotes");
                // }}
                onPress={() => {
                    setSelectedTab("LikedFeed");
                    onSelectTab("LikedFeed"); // Xác định khi tab "Quotes" được nhấn
                    navigation.navigate("History"); // Chuyển đến màn hình "Quotes"
                }}
            >
                <FontAwesome name='quote-left' size={23} color={ selectedTab  == "LikedFeed" ? "red" : "#413F3F"}/>
                <Text style={{fontSize: 13,color: selectedTab  == "LikedFeed" ? "red" : "#413F3F"}}>Liked Feeds</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;