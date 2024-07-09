import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { FlatList, Platform } from 'react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import allData from '../../../data.json';

export default function SearchItem({navigation,route}) {
  const option = route.params;
  console.log(option);

  const articles  = allData.articles;

  console.log(allData);
    const textInputRef = React.useRef(null);
  
    const clearText = () => {
      if (textInputRef.current) {
        textInputRef.current.clear(); // Xóa nội dung trong TextInput
      }
    };
  return (
    <View style={styles.container}>

      {/* <ScrollView style={{marginTop: Platform.OS === 'android' ? 30 : 0}}> */}
      <FlatList
      style={{marginTop: Platform.OS === 'android' ? 30 : 0}}
        data={articles} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate("Make me better", item)}>
            <Text style={styles.content}>{item.title}</Text>
        <View style={{borderWidth:0.3, borderColor:'#ccc'}}></View>

          </TouchableOpacity>

        )}
      />

    <View style={{marginTop:50}}></View>

      {/* </ScrollView> */}
      <View style={styles.search}>
      <View style={{flexDirection:'row', alignItems: 'center',}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
        <IconAntDesign name='arrowleft' size={18} color={'gray'} style={{marginLeft:5, marginRight:-10}}/>
        </TouchableOpacity>
        <TextInput 
        placeholder="What are you looking for?"
        value={option.lable}
        // secureTextEntry={true}  
        ref={textInputRef}
        style={{width:230, fontSize:20, marginLeft:15,borderBottomWidth:0.5, height:45, borderColor:'gray', color:'black'}}
        />
        <TouchableOpacity onPress={clearText} >
        <IconAntDesign name='close' color={'gray'} size={20} style={{marginLeft:30, marginRight:10}}/>
        </TouchableOpacity>

        <IconAntDesign name='search1' color={'gray'} size={20} style={{marginRight:10}}/>
      </View>
      
      </View>  




  </View> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight,
  
  },

  search:{
    height:60, 
    backgroundColor:'#fff', 
    flexDirection:'row', 
    // justifyContent:'space-between', 
    alignItems:'center',

    position: 'fixed',
    bottom: 0, /* Đặt phần tử ở đáy trang */
    width:'95%',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 5, 
    alignSelf: 'center',
    borderRadius:10,

   

},
content:{
  fontSize:20,
  fontWeight:'400',
  marginTop:15,
  marginBottom:15,
  marginLeft:20,
  color:'#333333'
}
 
 
});

