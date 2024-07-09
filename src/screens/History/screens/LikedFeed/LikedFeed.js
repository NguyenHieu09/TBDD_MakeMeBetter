import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LikedFeedItem from './components/LikedFeedItem/LikedFeedItem';




function LikedFeed(props) {
    const { navigation, route } = props || {};
    const { params } = route || {};

    const [selectedTab, setSelectedTab] = useState("LikedFeed");

    const [likedItems, setLikedItems] = useState([]);
    const handleLikedItem = (likedItem, isLiked) => {
        if (isLiked) {
            setLikedItems([...likedItems, likedItem]);
        } else {
            const updatedLikedItems = likedItems.filter(item => item.id !== likedItem.id);
            setLikedItems(updatedLikedItems);
        }
    };
    return <LikedFeedItem likedItems={likedItems} onLike={handleLikedItem}/>;
;
};
export default LikedFeed;