import React, { useEffect, useState } from 'react';
// import { TouchableOpacity } from 'react-native';
import { Text, Image, View, StyleSheet,ScrollView , TouchableOpacity, Linking} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';


function DetailArticle({route, navigation }) {
    const item = route.params;
    const [isPressed2, setIsPressed2] = useState(false);
    const [isPressed3, setIsPressed3] = useState(false);


    const [isBookmarked, setIsBookmarked] = useState(false); // State để xác định trạng thái nhấn của icon bookmark

    const handleBookmarkPress = () => {
        setIsBookmarked(!isBookmarked); // Khi nhấn, đảo ngược trạng thái của icon bookmark
    };



    const handlePress2 = () => {
        setIsPressed2(!isPressed2); }
    const handlePress3 = () => {
        setIsPressed3(!isPressed3); }

        //đổi màu icon Bookmarks/Notification khi link từ bookmark/noti sang
        useEffect(() => {
            if (item.isBookmarked !== undefined) {
                setIsBookmarked(item.isBookmarked);
            } 
            if(item.isPressed2 !== undefined){//noti
                setIsPressed2(item.isPressed2);
            }
            if(item.isPressed3 !== undefined){//heart
                setIsPressed3(item.isPressed3);
            }
        }, [item]);
    
    return(
        <View style={styles.container}>
        <ScrollView>
            
            <Image
                style={{width:"95%", height:250, marginLeft:10}}
                source={{uri:item.img}}
                resizeMode='contain'
            />
            <View style={{margin:10}}>
                <Text style={{ textAlign: 'center', color: 'blue' }}>{item.catetory}</Text>
                    <Text style={{ fontSize: 28, fontWeight: '600', textAlign: 'center', marginTop:10, marginBottom:10 }}>{item.title}</Text>
                    {item.content.map((contentItem, index) => (
                        <View key={index}>
                            {contentItem.quote && (
                                <View style={{marginBottom:-45}}>
                                    <Text style={{ fontSize: 16,lineHeight: 24}}>
                                        <Text style={{ fontWeight: '500' }}>{contentItem.quote.text} -</Text>
                                        {`${contentItem.quote.author}`}
                                    </Text>
                                </View>
                            )}
                            <Text style={{fontWeight:'500',fontSize:20,lineHeight: 24, marginTop:20, marginBottom:20}}>{contentItem.section}</Text>
                            <Text style={{fontSize:16,lineHeight: 24}}>{contentItem.text}</Text>
                        </View>
                    ))}
            </View>

            <View>
                
            </View>
        <View style={{marginTop:70}}></View>

        </ScrollView>



        <View style={styles.detail}>
            {/* <TouchableOpacity onPress={handlePress1} style={{marginLeft:40}}>
                <FontAwesome name='bookmark-o' 
                color={isPressed1 ? 'red' : 'gray'}
                size={26}
                /> 
            </TouchableOpacity> */}
            <TouchableOpacity onPress={handleBookmarkPress} style={{marginLeft:50}}>
                {isBookmarked ? (
                <FontAwesome name='bookmark' size={26} color='#4E4E4E' /> // Icon khi đã được bookmark
                    ) : (
                <FontAwesome name='bookmark-o' size={26} color='#545454' /> // Icon khi chưa được bookmark
                )}
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress2} style={{marginLeft:40}}>
                <FontAwesome name='volume-down' 
                color={isPressed2 ? '#4169E1' : 'gray'}
                size={30}
                /> 
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress3} style={{marginLeft:40}}>
                <AntDesign name='heart' 
                color={isPressed3 ? '#CD0000' : '#363636'}
                size={28}
                /> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com')} 
            style={{marginLeft:40}}>
                <Image
                style={{width:25,height:25}}
                source={require('../../../assets/image/whatsappicon.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => Linking.openURL('https://www.makemebetter.net/privacy-policy/')}
            style={{marginLeft:40}}>
                <Entypo name='share' 
                color={'gray'}
                size={26}
                /> 
            </TouchableOpacity>
        </View>
        </View>
       
        
    )
};

export default DetailArticle;

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#fff',
        
    },

    detail:{
        height:60, 
        backgroundColor:'#fff', 
        flexDirection:'row', 
        // justifyContent:'space-between', 
        alignItems:'center',

        position: 'fixed',
        bottom: 0, /* Đặt phần tử ở đáy trang */
        width:'100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 5,

       

    },

})



