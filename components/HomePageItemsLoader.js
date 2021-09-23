import React, { useState, useEffect } from 'react';
import { Text, View, RefreshControl } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import constants from '../assets/constants';
import NewsCard from './NewsCard';
import LottieView from 'lottie-react-native';



function HomePostsDisplay({navigation , refreshing}) {

    const [posts, setPosts] = useState([])
    const [pageCount, UpdatePageCount] = useState(1)
    const [HomePageLimit, SetHomePageLimit] = useState(0)


    useEffect(() => {

        loadData();

        const interval= setInterval(()=>{

            loadData();
           }, 300000)
           return()=> clearInterval(interval)
    }, [])

    useEffect(() => {
        if (!posts || refreshing) {
          loadData();
        }
      }, [posts, refreshing]);


const loadData = async () => {

        let myHeaders = new Headers();
        myHeaders.set('Cache-Control', 'no-cache');
        myHeaders.set('Pragma', 'no-cache');
        myHeaders.set('Expires', '0');
        const response = await fetch(`${constants.APP_BASE_URL}/wp-json/wp/v2/posts?per_page=4&page=${pageCount}&_fields=id,title,featured_media_src_url,featured_media,_links,_embedded&_embed`, {headers: myHeaders});
        const data = await response.json();
        setPosts(data);
       
}

   
const UpdateCards = async () => {

        let myHeaders = new Headers();
        myHeaders.set('Cache-Control', 'no-cache');
        myHeaders.set('Pragma', 'no-cache');
        myHeaders.set('Expires', '0');

        const newCount = pageCount + 1;
        const response = await fetch(`${constants.APP_BASE_URL}/wp-json/wp/v2/posts?per_page=4&page=${newCount}&_fields=id,title,featured_media_src_url,featured_media,_links,_embedded&_embed`, {headers: myHeaders});
        const data =  await response.json();



             
        if(data.code === 'rest_post_invalid_page_number') {
        let code = 1
          SetHomePageLimit(code)
        }else{
          SetHomePageLimit(0)
        }

        if(HomePageLimit == 0){
            const updatedData = [...posts, ...data]; 
            UpdatePageCount(newCount);
            setPosts(updatedData);
        }
    }

     if(posts.length > 1){
        return (
            <ScrollView>
          
          <View>
            {
            posts.map(function(x){
             return(
                 <NewsCard
                         key = {x.id}
                         postId = {x.id}
                         title = {x.title.rendered}
                         image = {x.featured_media_src_url}
                         cat = {x._embedded["wp:term"][0][0].name}
                         navigation = {navigation}
                                       
                />
                
            )
            })}

            

            {HomePageLimit < 1 ?
            <TouchableOpacity
                    style ={{
                        alignItems: 'center',
            
                    }}
             >

                    <Text onPress = {() => UpdateCards()} style={{
                          backgroundColor: constants.LIGHT_THEME_PRIMARY_COLOR,
                          width: 100,
                          textAlign: 'center',
                          padding: 10,
                          color: '#FFFFFF',
                          fontFamily: constants.PRIMARY_FONT_SEMI_BOLD,
                          borderRadius: 10,
                          marginBottom: 20,
                          shadowColor: 'white',
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 9,
                        
                    }}>Load More</Text>
                
                </TouchableOpacity>:<Text style={{
                    fontFamily: constants.PRIMARY_FONT_MEDIUM,
                    textAlign: 'center',
                    marginBottom: 20,

                   }}>No more posts to display</Text>} 
          </View>        
                
          </ScrollView>  
         )
     
    }else{
        return(
            <View>
                   <LottieView style={{width: 10, height: 100, marginLeft: '28%',}} source={require('../assets/loading/newsload1.json')} autoPlay loop />
            </View>
        )
    }
   
}


export default HomePostsDisplay;
  