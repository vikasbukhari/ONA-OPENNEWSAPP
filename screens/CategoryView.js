import React,{ useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, RefreshControl} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NewsCard from '../components/NewsCard';
import LottieView from 'lottie-react-native';
import constants from '../assets/constants';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const ViewCategory = ({route,navigation}) => {

    const [AllPostData, SetPostData] = useState([])
    const [PostPageCount, SetPostPageCount] = useState(1)
    const [PostLimitReached, SetLimitReached] = useState(0)

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        
      setRefreshing(true);
      LoadPostData();
      wait(2000).then(() => setRefreshing(false));

    }, []);

    useEffect(() => {

        LoadPostData();
       
    }, [])


    const LoadPostData = async() => {
        let myHeaders = new Headers();
        myHeaders.set('Cache-Control', 'no-cache');
        myHeaders.set('Pragma', 'no-cache');
        myHeaders.set('Expires', '0');
        const response = await fetch(`${constants.APP_BASE_URL}/wp-json/wp/v2/posts?categories=${route.params.catid}&per_page=2&page=${PostPageCount}`, {headers: myHeaders});
        const data = await response.json();
        SetPostData(data);

    }
    
    const UpdateCards = async () => {

      let newCount = PostPageCount + 1;
      const response = await fetch(`${constants.APP_BASE_URL}/wp-json/wp/v2/posts?categories=${route.params.catid}&per_page=2&page=${newCount}`);
      const data =  await response.json();
      
      
      if(data.code === 'rest_post_invalid_page_number') {
          let code = 1
          SetLimitReached(code)
      }else{
          SetLimitReached(0)
      }
        
      if(PostLimitReached == 0){
          const updatedData = [...AllPostData, ...data]; 
          SetPostPageCount(newCount);
          SetPostData(updatedData);
      }
    
  }
  
    
const DataConstant = AllPostData.map(function(x){
        return (
           
             <NewsCard
                     key = {x.id}
                     postId = {x.id}
                     title = {x.title.rendered}
                     image = {x.featured_media_src_url}
                     cat = {route.params.catname}
                     navigation = {navigation}
                                
            />
        )

});

return (
    <ScrollView 
    refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
    }>
        <View>
    
        <Text style={{
                marginTop: 22,
                marginLeft: 20,
                textAlign: 'left',
                fontFamily: constants.PRIMARY_FONT_BOLD,
                fontSize: 24,
                marginBottom: 40,
        }}>
            {route.params.catname}

        </Text>
            {AllPostData.length > 0 ? 
        
                    <View>
                    
                    {DataConstant}
        
                    {PostLimitReached < 1 ?
                    <TouchableOpacity
                    style ={{
                        alignItems: 'center',
                    }}     
                >
                <Text onPress = {() => UpdateCards()} style={{
                            backgroundColor: '#D7263D',
                            width: 100,
                            textAlign: 'center',  
                            padding: 10,
                            color: '#FFFFFF',
                            fontFamily: constants.PRIMARY_FONT_MEDIUM,
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
                
                </TouchableOpacity>
                    // Else
                    : <Text
                    style={{
                        fontFamily: constants.PRIMARY_FONT_BOLD,
                        textAlign: 'center',
                        marginBottom: 20,

                    }}
                    >No more posts to display</Text>}
                    
              </View> : <LottieView style={{width: 200, height: 200, margin: '16%',}} source={require('../assets/loading/newsload1.json')} autoPlay loop />}

        
        </View>
    </ScrollView>
  );
}

export default ViewCategory;
  