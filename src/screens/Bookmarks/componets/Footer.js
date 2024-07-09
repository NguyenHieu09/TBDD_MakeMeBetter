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
import IconMater from "react-native-vector-icons/MaterialCommunityIcons";

function Footer(props) {

    const {
        navigation,
        route,
        onSelectTab
    } = props || {};

    const {
        name: routeName
    } = route || {}
    const [selectedTab, setSelectedTab] = useState("Articles");
    return (
        <View style={{height: 70,flexDirection: "row",justifyContent: "space-between",alignItems: "center",borderTopWidth: 1,borderTopColor: "#F2F2F2",
        bottom: 0,left: 0,right: 0, backgroundColor:'#fff'}}>
            <TouchableOpacity
                style={{flex: 1,flexDirection: "column",alignItems: "center",justifyContent: "center"}}
                activeOpacity={0.5}

                onPress={() => {
                    setSelectedTab("Articles")
                    onSelectTab("Articles"); // Xác định khi tab "Suggested" được nhấn
                    navigation.navigate("Bookmarks"); // Chuyển đến màn hình "Suggested"
                }}
            >
                <IconMater name="account-tie-outline" size={23} color={ selectedTab == "Articles" ? "red" : "#413F3F"}/>
                <Text style={{fontSize: 13, color: selectedTab == "Articles" ? "red" : "#413F3F"}}>Articles</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={{flex: 1,flexDirection: "column",alignItems: "center",justifyContent: "center"}}
                activeOpacity={0.5}

                onPress={() => {
                    setSelectedTab("Feeds")
                    onSelectTab("Feeds"); // Xác định khi tab "Quotes" được nhấn
                    navigation.navigate("Bookmarks"); // Chuyển đến màn hình "Quotes"
                }}
            >
                <FontAwesome name='quote-left' size={23} color={ selectedTab == "Feeds" ? "red" : "#413F3F"}/>
                <Text style={{fontSize: 13,color: selectedTab == "Feeds" ? "red" : "#413F3F"}}>Feeds</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;