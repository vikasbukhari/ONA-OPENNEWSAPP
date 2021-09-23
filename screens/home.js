import React from 'react';
import { Text, View , SafeAreaView , ScrollView, RefreshControl } from 'react-native';
import HomeSlider from '../components/HomeSlider';
import {HomepageStyle} from '../assets/StyleSheet';
import HomePostsDisplay from '../components/HomePageItemsLoader';
import constants from '../assets/constants';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Home = ({navigation}) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));

    }, []);

  return (
      <SafeAreaView
      style={HomepageStyle.FullContainer}>
    
      <ScrollView  refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
                <View style={{marginTop: 20, padding: 5, marginLeft: 10}}>     
                  <Text style={HomepageStyle.AppTitle}>{constants.APP_NAME}</Text>
                </View>

                <View>
                    <HomeSlider navigation={navigation} refreshing={refreshing}/>
                </View>
              
                <View>
                    <View style ={HomepageStyle.RecentNewsContainer}>
                        <Text style={HomepageStyle.RecentNewsTitle}>{constants.RECENT_NEWS_TITLE}</Text>
                        <HomePostsDisplay navigation={navigation} refreshing={refreshing} />
                    </View>
                </View>
      
          </ScrollView>
        </SafeAreaView>
  );
}

export default Home;
  