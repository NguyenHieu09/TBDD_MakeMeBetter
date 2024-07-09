import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import ArticleSuggestion from './ArticleSuggestion';
import FeedSuggestion from './FeedSuggestion';
//import icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';



function Header(props) {

    const {
        navigation,
        route
    } = props || {};

    const {
        name: routeName,
        params
    } = route || {};
    const {
        catetory,
        headerTitle
    } = params || {};

    const toggleDrawer = useCallback(() => {

        navigation.toggleDrawer();
    }, [navigation]);

    return (
        <SafeAreaView style = {{paddingTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight,backgroundColor:'#fff'}}>

            <View style={{height: 62,flexDirection: "row",justifyContent: "center",alignItems: "center",marginTop: Platform.OS === 'android' ? 30 : 0}}>
                <TouchableOpacity 
                    activeOpacity={0.5}
                    style={{justifyContent: "center",alignContent: "center",width: 30,height: "100%",paddingLeft: 10
                    }}
                    onPress={toggleDrawer}
                >
                    <FontAwesome name="bars" style={{fontSize: 20, color: '#848484' }}/>
                </TouchableOpacity>

                <View style={{flex: 1,justifyContent: "center",alignContent: "center",flexDirection: "column",height: "100%",paddingHorizontal: 24, justifyContent:'center'}}>
                    <Text style={{fontSize: 20,fontWeight: "700",color: "black"}}>Make Me Better</Text>
                    {
                        !!headerTitle && (

                            <Text style={{fontSize: 14,color: "gray"}}>{headerTitle}</Text>
                        )
                    }
                </View>
                <TouchableOpacity 
                    onPress={() => {
                   // Xử lý khi nhấn search
                    navigation.navigate('Search')
                    }}
                    activeOpacity={0.5}
                    style={{height: "100%",width: 30,justifyContent: "center",alignContent: "center",paddingRight: 10
                    }}
                    
                >
                    <FontAwesome name="search" style={{fontSize: 20,color: '#545454' }}/>
                </TouchableOpacity>
            </View>
            {
                routeName == "Article" ? (
                    <ArticleSuggestion />
                ) : (
                    <FeedSuggestion />
                )
            }
        </SafeAreaView>
    );
}
export default Header;