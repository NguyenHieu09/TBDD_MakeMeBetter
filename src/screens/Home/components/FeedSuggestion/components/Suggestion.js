import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

function Suggestion(props) {

    const {
        value,
        label
    } = props || {};
    const navigation = useNavigation();

    const onPress = useCallback(() => {
        //lay value
        navigation.setParams({
            catetory: value,
            headerTitle: label
        });
    }, [value, label, navigation]);

    return (
        //style lại menu
        //hien thi ds menu theo value
        <TouchableOpacity style={styles.suggestionButton} onPress={onPress}>
            <Text style={styles.suggestionText}>{label}</Text>
        </TouchableOpacity>
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

export default Suggestion;