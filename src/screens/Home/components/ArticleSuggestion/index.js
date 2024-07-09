import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import Suggestion from './components/Suggestion';
// import useDataList from './hooks/useDataList';
import { getListSuggestionArticles } from '../../../../services/article';
import useDataList from '../DataList/hooks/useDataList';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ArticleSuggestion(props) {
    

    const {
        data,
        refreshing,
        error,
        onRefresh
    } = useDataList({
        service: getListSuggestionArticles
    });

    const navigation = useNavigation();

    return (
        //tên menu theo data
        <ScrollView horizontal={true} contentContainerStyle={{
            paddingVertical: 8
        }}>
            {/* <Suggestion label="Podcast" value="Podcast"/>
            <Suggestion label="Videos" value="Videos"/>
            <Suggestion label="Suggested" value="Suggested"/> */}
             <TouchableOpacity 
             onPress={()=>navigation.navigate('Podcast')}
             style={styles.suggestionButton} >
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

export default ArticleSuggestion;