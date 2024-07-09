import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import icon
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';


import { StyleSheet } from 'react-native';
import { Linking } from 'react-native';

function FeedItem(props) {

    const {item} = props || {};

    const navigation = useNavigation();
    
    const {
        content,
        img,
        catetory,
        date,
        like
    } = item || {};

    const openWhatsApp = () => {
        const whatsappLink = 'https://web.whatsapp.com/';
        // Mở liên kết
        Linking.openURL(whatsappLink);
    };
    const openTwitter = () => {
        const twitterLink = 'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidmkifQ%3D%3D%22%7D';
        // Mở liên kết
        Linking.openURL(twitterLink);
    };
    const openFB = () => {
        const fbLink = 'https://www.facebook.com/login/';
        // Mở liên kết
        Linking.openURL(fbLink);
    };
    const openIns = () => {
        const insLink = 'https://www.instagram.com/accounts/login/';
        // Mở liên kết
        Linking.openURL(insLink);
    };

    const [isHearted, setIsHearted] = useState(false); // State để xác định trạng thái nhấn của icon heart

    const heartColor = isHearted ? 'red' : '#888888'; // Màu sắc của icon heart

    const handleHeartPress = () => {
        setIsHearted(!isHearted); // Khi nhấn, đảo ngược trạng thái isHearted
    };

    const [isBookmarked, setIsBookmarked] = useState(false); // State để xác định trạng thái nhấn của icon bookmark

    const handleBookmarkPress = () => {
        setIsBookmarked(!isBookmarked); // Khi nhấn, đảo ngược trạng thái của icon bookmark
    };
    return (
        <View  style={{flex:1, marginBottom: 10, borderRadius:7,shadowColor: '#000',shadowOffset: { width: 0, height: 4 },shadowOpacity: 0.25,shadowRadius: 4,elevation: 4,
                        width:'100%', height:'100%', marginTop:5, }}>
                 <View style={{flex:2,flexDirection:'column',justifyContent: "center",alignItems: "center", width:'100%', height:'100%', paddingHorizontal:5}}>
                    <Image style={{width: '100%', height:250}}
                        // source ={require('../../../../../../../assets/image/Are you Lying to Yourself.jpg')}
                        source={{uri: img}}
                        resizeMode ='cover'
                    />
                </View>
                <View style={{flex: 1,flexDirection: "column", marginTop:7,paddingHorizontal:10, justifyContent:'center'}}>
                    <View style={{flex: 2, overflow:'scroll', justifyContent:'center'}}>
                        <Text style = {{fontSize:14, fontWeight:'400', color:'#000'}}>{content}</Text>
                    </View>
                    <View style = {{flex: 1, paddingBottom:8, paddingTop:8}}>
                        <Text> {date}</Text>
                    </View>
                    <View style = {{flex:1,flexDirection:'row', justifyContent: 'space-between', alignItems:'center', paddingBottom:10}}>
                        <View style = {{flex:1, justifyContent: 'flex-start'}}>
                            <View style = {{}}>
                                <TouchableOpacity onPress={handleBookmarkPress}>
                                    {isBookmarked ? (
                                        <FontAwesome name='bookmark-o' size={26} color='#545454' /> // Icon khi chưa được bookmark
                                        
                                    ) : (
                                        <FontAwesome name='bookmark' size={26} color='#4E4E4E' /> // Icon khi đã được bookmark
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:2}}></View>
                        <View style = {{flex:3, justifyContent: 'flex-end'}}>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                                <TouchableOpacity onPress={openFB}>
                                    <Fontisto name='share' size={26} color={'#347CFF'}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={openTwitter}>
                                    <AntDesign name='twitter' size={26} color={'#5691FD'}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={openFB}>
                                    <Entypo name='facebook' size={26} color={'#2459BF'}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={openIns}>
                                    <Image 
                                        style = {{height:26, width:26}}
                                        source={require('../../../../../../../assets/image/instagram.png')}
                                        resizeMode='contain'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={openWhatsApp}>
                                    <Image 
                                        style = {{height:26, width:26}}
                                        source={require('../../../../../../../assets/image/whatsapp.png')}
                                        resizeMode='contain'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
    ctn:{
        alignItems:'flex-start'
    }
});
export default FeedItem;