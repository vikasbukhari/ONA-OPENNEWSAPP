import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import {HomepageStyle} from '../assets/StyleSheet';



const NewsCard = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('ViewNews', { postID: props.postId})}>
        <View style={HomepageStyle.CardContainer}>
                
            <Image style={HomepageStyle.CardImage} 
            source={{uri: props.image}}/>

            <View style={HomepageStyle.CardContainerRight}>
            <Text style={HomepageStyle.CardTag}>{props.cat}</Text>
            <Text style={HomepageStyle.CardHeadline}>{props.title}</Text>
            </View>
          
       </View>
       </TouchableOpacity>

    )

}

export default NewsCard;