import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import ArticleItem from './components/ArticleItem/ArticleItem';

import DataList from '../../../Home/components/DataList';
import { getListArticles } from '../../../../services/article';




function Article(props) {
    const { navigation, route } = props || {};
    const { params } = route || {};

    const [selectedTab, setSelectedTab] = useState("Articles");

    return (
        <View style={{ flex: 1 }}>
            {selectedTab === "Articles" && (
                <DataList service={getListArticles} keyName="id" params={params} component={ArticleItem} />
            )}
            {/* <Footer
                navigation={navigation}
                route={route}
                onSelectTab={(tab) => setSelectedTab(tab)}
            /> */}
        </View>
    );
};
export default Article;