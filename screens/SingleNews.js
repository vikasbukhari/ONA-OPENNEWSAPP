import React, { useState, useEffect} from 'react';
import { Text, View, Image,  StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import constants from '../assets/constants';
import {NewsPageStyle} from '../assets/StyleSheet';
import LottieView from 'lottie-react-native';

import { useWindowDimensions } from 'react-native';


const dimensions = Dimensions.get('window');

function SingleNews ({route, navigation}){
    const [postData, setPostData] = useState({});
    useEffect(() => {
        LoadPostData();
       
    }, [])


const LoadPostData = async() => {
        let myHeaders = new Headers();
        myHeaders.set('Cache-Control', 'no-cache');
        myHeaders.set('Pragma', 'no-cache');
        myHeaders.set('Expires', '1000');
        const response = await fetch(`${constants.APP_BASE_URL}/wp-json/wp/v2/posts?include=${route.params.postID}`, {headers: myHeaders});
        const data = await response.json();
        setPostData(data);
      
}

const { Width } = useWindowDimensions();

    if(postData.length > 0 )
    {
        const regex = /(<([^>]+)>)/ig;
        const result = postData[0].content.rendered.replace(regex, '');

        return(
                 <ScrollView style={NewsPageStyle.SingleNewsContainer}>
                        <TouchableOpacity 
                            onPress={(props) => { navigation.goBack(null) }}
                            style={{
                                    position: 'absolute',
                                    backgroundColor: constants.LIGHT_THEME_BG,
                                    margin: 10,
                                    zIndex: 1,
                                    height: 40,
                                    width: 40,
                                    borderRadius: 20,
                                    padding: 5,

                                }}>

                            <View>
                                <Icon name="arrow-left" size={30} color={constants.LIGHT_THEME_PRIMARY_COLOR}/>
                            </View>     

                        </TouchableOpacity>
                  
                   
                    <View>

                    <Image style={NewsPageStyle.LoaderImage, { height: 250, width: dimensions.width}} 
                        source={{uri: postData[0].featured_media_src_url}}/>
                    </View>
    
                    <View style={NewsPageStyle.TextViewContainer}>
                    
                        {/* <Text style={NewsPageStyle.TextTag}>Travel</Text> */}
                            
                            <View style={NewsPageStyle.HeadlineContainer}>
                                <Text style={NewsPageStyle.TitleTag}>{postData[0].title.rendered}</Text>
                            </View>

                        <Text style={NewsPageStyle.MetaTag}>{postData[0].date_gmt}</Text>          
                        
                        <Text style={NewsPageStyle.ArticleText}>{result}</Text>
                      
                    </View>  
                    
    
            </ScrollView>
    
        );
    }else{
        return(

            <ScrollView style={NewsPageStyle.SingleNewsContainer}>
                   
                   <LottieView style={{width: 150, height: 200, margin: '16%',}} source={require('../assets/loading/newsload1.json')} autoPlay loop />
    
            </ScrollView>
        );
    } 
}

export default SingleNews