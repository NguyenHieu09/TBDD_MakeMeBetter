import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DataList from '../../components/DataList';
import ArticleItem from './components/ArticleItem';
import { getListArticles } from '../../../../services/article';
import useArticle from './hooks/useArticle';
import Footer from '../../components/Footer';

function Article(props) {

    const {
        navigation,
        route
    } = props || {};
    
    const {
        params
    } = route || {};

    const {
    } = useArticle({

    });

    return (
        //load data từ api dựa theo params + footer
        <View style={{flex: 1}}>
            <DataList 
                service={getListArticles}
                keyName="id"
                params={params}
                component={ArticleItem}
            />
            <Footer navigation={navigation} route={route}/>
        </View>
        
    );
}

export default Article;