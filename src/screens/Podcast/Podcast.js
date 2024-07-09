import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, Pressable, StyleSheet, Text, View, Image } from 'react-native';
// import RadioForm, { RadioButtonInput, RadioButtonLabel,RadioButton } from 'react-native-simple-radio-button';
// import { RadioButton } from 'react-native-radio-buttons-group';
// import { SafeAreaView } from 'react-native';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
import allData from '../../../data.json';
import { TouchableOpacity } from 'react-native';




export default function Podcasts({ navigation }) {
  //  const [podcasts, setPodcasts] = useState([]); // State để lưu trữ danh sách podcast

  //  useEffect(() => {
  //    // Gọi API để lấy danh sách podcast khi component được render
  //    // axios.get('http://localhost:3000/podcast')
  //    axios.get('http://localhost:3000/podcast')
  //      .then(response => {
  //        // Nếu gọi API thành công, cập nhật state podcasts với dữ liệu từ API
  //        setPodcasts(response.data);
  //        console.log(response.data);
  //      })
  //      .catch(error => {
  //        // Xử lý lỗi nếu gọi API thất bại
  //        console.error('Error fetching podcasts:', error);
  //      });
  //  }, []); // useEffect sẽ chạy 1 lần duy nhất khi component được render


  const podcasts = allData.podcast;

  const defaultSelectedItem = {
    img: 'https://res.cloudinary.com/dxvrdtaky/image/upload/v1700741013/Group729_s1lwu8.png', // Đường dẫn đến hình ảnh mặc định
    title: 'Listen Something Good Today!', // Tiêu đề mặc định
  };

  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);


  const [isPlayer, setIsPlayer] = useState(false); // State để xác định trạng thái nhấn của icon bookmark

  const handlePlayer = () => {
    setIsPlayer(!isPlayer); // Khi nhấn, đảo ngược trạng thái của icon bookmark
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={podcasts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={() => setSelectedItem(item)}>
            <Image
              style={{ width: '100%', height: 70, flex: 1, marginLeft: -10 }}
              source={{ uri: item.img }}
              resizeMode='contain'
            />
            <View style={{ flexDirection: 'column', flex: 1.5, padding: 5 }}>
              <Text style={{ fontSize: 18 }}>{item.title} </Text>
              <View style={{ flexDirection: 'row', marginTop: 10, }}>

                <Text style={{}}>{item.catetory} {'\u2022'}</Text>
                <Text style={{ color: 'blue' }}>{item.time}mins</Text>
              </View>

            </View>

          </Pressable>
        )}
      />
      <View>
        <View style={styles.detail}>
          <Image
            style={{ width: 65, height: 80, flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5 }}
            //   source ={require('../../../assets/image/Group729.png')}
            source={{ uri: selectedItem.img }}
            resizeMode='contain'
          />
          <View style={{ flex: 1.5 }}>
            <Text>{selectedItem.title}</Text>

          </View>

          <TouchableOpacity onPress={handlePlayer}>
            {isPlayer ? (
              <Entypo name="controller-paus" color={"#4E4E4E"} size={23} style={{ marginRight: 20 }} />
            ) : (
              <Entypo name="controller-play" color={"#4E4E4E"} size={23} style={{ marginRight: 20 }} />
            )}
          </TouchableOpacity>

        </View>
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight,

  },

  back: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'android' ? 30 : 0,
    height: 50,
    backgroundColor: '#fff',

  },

  title: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '600'
  },

  item: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
    //  marginLeft:10, 
    marginRight: 5,
  },
  detail: {
    height: 100,
    backgroundColor: '#F1EFEB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0, /* Đặt phần tử ở đáy trang */
    left: 0,
    width: '100%',

  }


});


