import React from 'react';
import { ScrollView } from 'react-native';
import Suggestion from './components/Suggestion';
// import useDataList from './hooks/useDataList';

import useDataList from '../DataList/hooks/useDataList';
import { getListSuggestionFeed } from '../../../../services/feed';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FeedSuggestion(props) {


    const {
        data,
        refreshing,
        error,
        onRefresh
    } = useDataList({
        service: getListSuggestionFeed
    });

    const navigation = useNavigation();

    return (
        //tên menu theo data
        <ScrollView horizontal={true} contentContainerStyle={{
            paddingVertical: 5
        }}>
            {/* <Suggestion label="abc" value="abc"/> */}
            <TouchableOpacity style={styles.suggestionButton} onPress={()=> navigation.navigate('Podcast')}>
                <Text style={styles.suggestionText}>Podcast</Text>
             </TouchableOpacity>
            {
                (data || []).map((suggestion, index) => {

                    const {
                        id, 
                        catetory
                    } = suggestion || {};
                    return (
                        <Suggestion 
                            label={catetory}
                            value={catetory}
                            key={index}
                        />
                    );
                })
            }
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    suggestionButton: {
        padding: 9,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#DEDCDC',
        borderStyle:'solid',
        marginHorizontal: 4        
    },
    suggestionText: {
        fontSize: 14,
        fontWeight: '400',
        
    },
})

export default FeedSuggestion;