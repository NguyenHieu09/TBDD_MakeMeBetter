import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DataList from '../Home/components/DataList';

import ArticleItem from './screens/Article/components/ArticleItem/ArticleItem';
import FeedItem from './screens/Feed/components/FeedItem/FeedItem';
import { getListFeed } from '../../services/feed';
import Footer from './componets/Footer';
import { getListArticles } from '../../services/article';
import { ScrollView } from 'react-native-gesture-handler';





function Bookmarks(props) {
    const { navigation, route } = props || {};
    const { params } = route || {};

    const [selectedTab, setSelectedTab] = useState("Articles");

    return (
        <View style={{ flex: 1 }}>
            <View style = {{flex:1, paddingBottom:'18%'}}>
                {selectedTab === "Articles" && (
                    <DataList service={getListArticles} keyName="id" params={params} component={ArticleItem} />
                )}
                {selectedTab === "Feeds" && (
                    <DataList service={getListFeed} keyName="id" params={params} component={FeedItem} />
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

export default Bookmarks;
