import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// import useArticle from '../Home/screens/Article/hooks/useArticle';
import { getListArticles } from '../../services/article';
import DataList from '../Home/components/DataList';

import NotificationItem from './components/NotificationItem';


function Notification(props) {

    const {
        navigation,
        route
    } = props || {};
    
    const {
        params
    } = route || {};

    // const {
    // } = useArticle({

    // });

    return (
        //load data từ api dựa theo params + footer
        <View style={{flex: 1}}>
            <DataList 
                service={getListArticles}
                keyName="id"
                params={params}
                component={NotificationItem}
            />
            {/* <Footer navigation={navigation} route={route}/> */}
        </View>
        
    );
}

export default Notification;