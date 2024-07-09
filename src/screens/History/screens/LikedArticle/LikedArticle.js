import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getListArticles } from '../../../../services/article';
import LikedArticleItem from './components/LikedArticleItem/LikedArticleItem';
import Footer from '../../components/Footer';
import DataList from '../../../Home/components/DataList';


function LikedArticle(props) {
    const { navigation, route } = props || {};
    const { params } = route || {};

    const [selectedTab, setSelectedTab] = useState("Liked Feeds");

    return (
        <View style={{ flex: 1 }}>
            {selectedTab === "Liked Articles" && (
                <DataList service={getListArticles} keyName="id" params={params} component={LikedArticleItem} />
            )}
            <Footer
                navigation={navigation}
                route={route}
                onSelectTab={(tab) => setSelectedTab(tab)}
            />
        </View>
    );
};
export default LikedArticle;