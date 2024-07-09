import React, { useCallback } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ArticleItem(props) {

    const {
        item
    } = props || {};

    const navigation = useNavigation();
    const goToDetail = useCallback(() => {
        //đổi màu icon bookmark khi link từ đây sang DetailArticle
        navigation.navigate("Make me better", { ...item, isBookmarked: true });
    }, [item, navigation]);

    const {
        title,
        img,
        catetory,
        date,
        time
    } = item || {};

    // console.log(item);
    return (
        <TouchableOpacity 
            onPress={goToDetail}
        // style={{backgroundColor: "pink",marginBottom: 5}}
            style={{flex:1, marginBottom: 10, borderRadius:7,shadowColor: '#000',shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.25,shadowRadius: 4,elevation: 4, overflow:'hidden',
                    width:'100%', height:248, marginTop:5, backgroundColor:'#fff', marginLeft:2, marginRight:2}}
        >
            <View style={{flex:3,flexDirection:'column',justifyContent: "center",alignItems: "center", width:'100%', height:'100%', paddingBottom:8}}>
                <Image style={{width: '100%', height:180}}
                    // source ={require('../../../../../../../assets/image/Are you Lying to Yourself.jpg')}
                    source={{uri: img}}
                    resizeMode ='cover'
                />
            </View>
            <View style={{flex: 1,flexDirection: "column", marginTop:7,paddingHorizontal:8, justifyContent:'center'}}>
                <View style={{flex: 1 , justifyContent:'center'}}>
                    
                    <Text style = {{fontSize:16, fontWeight:'600', color:'#000'}}>{title}</Text>
                </View>
                <View style = {{flex: 1,flexDirection:'row', paddingBottom:8, paddingTop:8,justifyContent:'space-between'}}>
                    <Text style = {{fontSize:12, fontWeight:'400', color:'#555555'}}>
                        {catetory} {'\u2022'}  {''}
                        <Text style = {{fontSize:12, fontWeight:'400', color:'#555555'}}> 
                            {date} {'\u2022'}  {time} <Text style = {{fontSize:12, fontWeight:'400', color:'#555555'}}> mins</Text>
                        </Text>
                    </Text>
                </View>
            </View>
    </TouchableOpacity>
    );
}

export default ArticleItem;