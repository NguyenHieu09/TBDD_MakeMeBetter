import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getListFeed } from '../../services/feed';


import LikedFeedItem from './screens/LikedFeed/components/LikedFeedItem/LikedFeedItem';
import DataList from '../Home/components/DataList';
import Footer from './components/Footer';
import ReadArticle from './screens/ReadArticle/ReadArticle';
import { StyleSheet } from 'react-native';

import { getListArticles } from '../../services/article';
import LikedArticleItem from './screens/LikedArticle/components/LikedArticleItem/LikedArticleItem';
import { ScrollView } from 'react-native-gesture-handler';



function History(props) {
    const { navigation, route } = props || {};
    const { params } = route || {};
    
    const [selectedTab, setSelectedTab] = useState("ReadArticle");

    return (
        <View style={{ flex: 1 }}>
            <View  style = {{flex:2, paddingBottom:'18%'}}>
                {selectedTab === "ReadArticle" && (
                    <ScrollView vertical={true}>
                        <ReadArticle/>
                    </ScrollView>
                    
                )}
                
                {selectedTab === "LikedArticle" && (
                    <DataList service={getListArticles} keyName="id" params={params} component={LikedArticleItem} />
                )}
                {selectedTab === "LikedFeed" && (
                    <DataList service={getListFeed} keyName="id" params={params} component={LikedFeedItem} />
                )}
            </View>
            <View style = {{bottom:0, position:'fixed', width:'100%'}}>
                <Footer
                    navigation={navigation}
                    route={route}
                    onSelectTab={(tab) => setSelectedTab(tab)}
                />
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,

   // Thay đổi khoảng cách bottom của content để fit với footer
    },
});

export default History;
